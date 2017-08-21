import { curry } from 'ramda';

export default curry((char, str) => {
    return `${char}${str}`;
});
