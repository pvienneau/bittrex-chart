import percentage from '../percentage';

describe('percentage', () => {
    it('should correctly format the following values', () => {
        // expect(percentage(1)).to.equal('1.00%');
        // expect(percentage('1')).to.equal('1.00%');
        // expect(percentage(1.0001)).to.equal('1.00%');
        // expect(percentage('1.0001')).to.equal('1.00%');
        // expect(percentage(undefined)).to.equal('0.00%');
        expect(percentage(1.145)).to.equal('1.15%');
        expect(percentage('abc')).to.equal('0.00%');
    });
});
