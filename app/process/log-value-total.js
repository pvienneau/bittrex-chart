import { tap } from 'ramda';
import moment from 'moment';

import { Request } from 'helpers';
import { Tick } from 'models';
import { getDepositTotal } from 'jobs';

export default function() {
    return Request.bittrex
        .getBalances()
        .then(balances => balances.filter(balance => !!balance.Balance))
        .then(balances =>
            Promise.map(
                balances,
                balance =>
                    new Promise((resolve, reject) => {
                        Request.cryptoCompare
                            .price(balance.Currency, 'CAD', {})
                            .then(amount => {
                                resolve({
                                    currency: balance.Currency,
                                    value: +parseFloat(
                                        amount.CAD * balance.Balance
                                    ).toFixed(2),
                                });
                            });
                    })
            )
        )
        .then(balances =>
            balances.reduce((acc, balance) => {
                return (acc += +balance.value);
            }, 0)
        )
        .then(value => +parseFloat(value).toFixed(2))
        .then(async value => ({
            value,
            deposit_total: await getDepositTotal(),
            created_at: moment().toDate(),
        }))
        .then(Tick.create.bind(Tick))
        .then(balance =>
            console.log(`Logged new balance at ${balance.value} $ CAD`)
        )
        .catch(
            console.log.bind(
                console,
                'Error: Something went wrong when logging new balance: '
            )
        );
    // .then(tap(console.log));
    // .then(balances =>
    //     balances.map(async balance => {
    //         return {
    //             deposit_total: await getDepositTotal(),
    //             value:
    //             created_at: +moment(),
    //         };
    //     })
    // );
    // .then(tap(console.log));
}
