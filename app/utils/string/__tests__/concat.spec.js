import concat from '../concat';

describe('concat', () => {
    it('should concatenate two strings together', () => {
        const lStr = 'hello';
        const rStr = 'world';

        expect(concat(lStr, rStr)).to.equal(`${lStr}${rStr}`);
    });
});
