import ltrim from '../ltrim';

describe('ltrim', () => {
    it('should remove all specified character from the start of a provided string', () => {
        const removeAs = ltrim('a');
        const expectedString = 'halo';

        expect(removeAs(expectedString)).to.equal(expectedString);
        expect(removeAs(`a${expectedString}`)).to.equal(expectedString);
        expect(removeAs(`aa${expectedString}`)).to.equal(expectedString);
    });
});
