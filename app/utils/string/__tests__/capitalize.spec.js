import capitalize from '../capitalize';

describe('capitalize', () => {
    it('should correctly capitalize the following strings', () => {
        expect(capitalize('hello')).to.equal('Hello');
        expect(capitalize('hello world')).to.equal('Hello world');
        expect(capitalize(undefined)).to.equal('');
    });
});
