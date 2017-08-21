import dollar from '../dollar';

describe('dollar', () => {
    it('should correctly format the following values', () => {
        expect(dollar(1)).to.equal('1.00');
        expect(dollar(1.232)).to.equal('1.23');
        expect(dollar('1.232')).to.equal('1.23');
        expect(dollar()).to.equal('0.00');
    });
});
