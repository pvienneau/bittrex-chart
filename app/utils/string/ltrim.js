import { curry } from 'ramda';

export default curry((char, str) => {
    let newStr = str;

    while (newStr.indexOf(char) === 0)
        newStr = newStr.substring(1);

    return newStr;
});
