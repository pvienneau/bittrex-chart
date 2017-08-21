import dotenv from 'dotenv';
import bittrex from 'node.bittrex.api';
import cryptoCompare from 'cryptocompare';

dotenv.config();

bittrex.options({
    apikey: process.env.API_BITTREX_KEY,
    apisecret: process.env.API_BITTREX_SECRET,
});

export default {
    bittrex: {
        getDepositHistory: (options = {}) => {
            return new Promise((resolve, reject) => {
                bittrex.getdeposithistory(options, (response, error) => {
                    if (error) reject(error);
                    if (!response.success) reject(response.message);

                    resolve(response.result);
                });
            });
        },
        getBalances: () => {
            return new Promise((resolve, reject) => {
                bittrex.getbalances((response, error) => {
                    if (error) reject(error);
                    if (!response.success) reject(response.message);

                    resolve(response.result);
                });
            });
        },
    },
    cryptoCompare,
};
