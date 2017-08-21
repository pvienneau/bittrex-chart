import { tap, filter } from 'ramda';
import moment from 'moment';
import pluralize from 'pluralize';

import { Request } from 'helpers';
import { Deposit } from 'models';

export default function() {
    return Deposit.find({})
        .then(deposits =>
            deposits.reduce((acc, deposit) => {
                acc += deposit.amount_cad;
                return acc;
            }, 0)
        )
        .then(amount_cad => parseFloat(amount_cad).toFixed(2))
        .then(
            tap(amount_cad =>
                console.log(
                    `Cumulative deposits amounting to ${amount_cad} $ CAD.`
                )
            )
        );
}
