import rtrim from '../rtrim';

describe('rtrim', () => {
    it('should remove all specified character from the end of a provided string', () => {
        const removeAs = rtrim('a');
        const expectedString = 'halo';

        expect(removeAs(expectedString)).to.equal(expectedString);
        expect(removeAs(`${expectedString}a`)).to.equal(expectedString);
        expect(removeAs(`${expectedString}aa`)).to.equal(expectedString);
    });
});
