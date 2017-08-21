import sanitize from '../sanitize.js';

describe('sanitize', () => {
    describe('sanitize', () => {
        const expectedPath = 'some/path';

        it('should remove query parameters from path', () => {
            expect(sanitize(`${expectedPath}?key=value`)).to.equal(
                expectedPath
            );
        });

        it('should remove slashes at the start of a path', () => {
            expect(sanitize(`/${expectedPath}`)).to.equal(expectedPath);
        });

        it('should remove slashes at the end of a path', () => {
            expect(sanitize(`${expectedPath}/`)).to.equal(expectedPath);
        });
    });
});
