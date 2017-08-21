import { splitAt } from 'ramda';

export default (str = '') => {
    const strArr = splitAt(1, str);

    strArr[0] = strArr[0].toUpperCase();

    return strArr.join('');
};
