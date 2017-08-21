import { curry } from 'ramda';

export default curry((char, str) => {
    let newStr = str;

    while (newStr.charAt(newStr.length - 1) === char)
        newStr = newStr.slice(0, -1);

    return newStr;
});
