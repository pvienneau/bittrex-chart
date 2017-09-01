export default val => {
    if (isNaN(val) || !val) {
        val = 0;
    }

    const valArr = `${val}`.split('.');

    valArr[1] = valArr[1] || '';
    // if (Number.isInteger(valArr[1])) valArr[1] = Math.round(valArr[1]);
    valArr[1] += '00';
    valArr[1] = valArr[1].slice(0, 2);

    return `${valArr.join('.')}%`;
};
