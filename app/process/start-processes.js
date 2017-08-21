import { compose } from 'ramda';
import camelCase from 'lodash.camelcase';
import pluralize from 'pluralize';

const executePaths = paths => {
    console.log(`Initializing ${pluralize('process', paths.length, true)}`);

    return Promise.each(paths, path => {
        const pathFctName = camelCase(path);

        return require(path)
            .default()
            .catch(
                console.error.bind(
                    console,
                    `An unhandled error occured in ${pathFctName}: `
                )
            );
    });
};

export default function(processPaths = []) {
    return () => {
        if (!processPaths.length) return false;

        executePaths(processPaths);

        setInterval(() => {
            executePaths(processPaths);
        }, 60 * 1000); //15 * 60 * 1000
    };
}
