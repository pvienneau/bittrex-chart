import { tap, filter } from 'ramda';
import moment from 'moment';
import pluralize from 'pluralize';

import { Request } from 'helpers';
import { Deposit } from 'models';

export default function() {
    return Request.bittrex
        .getDepositHistory()
        .then(async deposits => {
            const lastDeposit = await Deposit.findOne(
                {},
                {},
                { sort: { created_at: -1 } }
            );

            if (!lastDeposit) return deposits;

            return deposits.filter(deposit => {
                return (
                    +moment(deposit.LastUpdated) >
                    +moment(lastDeposit.created_at)
                );
            });
        })
        .then(deposits =>
            deposits.map(deposit => ({
                bittrex_id: deposit.Id,
                currency: deposit.Currency,
                amount: deposit.Amount,
                created_at: moment(deposit.LastUpdated).toDate(),
            }))
        )
        .then(deposits =>
            Promise.map(
                deposits,
                deposit =>
                    new Promise((resolve, reject) => {
                        Request.cryptoCompare
                            .priceHistorical(
                                deposit.currency,
                                'CAD',
                                moment(deposit.created_at).toDate(),
                                {
                                    tryConversion: false,
                                }
                            )
                            .then(amount => {
                                deposit.amount_cad = +parseFloat(
                                    amount.CAD * deposit.amount
                                ).toFixed(2);
                                resolve(deposit);
                            });
                    })
            )
        )
        .then(
            tap(deposits =>
                console.log(
                    `Attemping to register ${pluralize('deposit', deposits.length, true)}`
                )
            )
        )
        .then(deposits => Deposit.insertMany(deposits))
        .then(docs =>
            console.log(`Logged ${pluralize('deposit', docs.length, true)}`)
        )
        .catch(
            console.log.bind(
                console,
                'Error: Something went wrong when logging new deposits: '
            )
        );
}
