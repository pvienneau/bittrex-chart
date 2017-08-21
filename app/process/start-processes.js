import { compose } from 'ramda';
import camelCase from 'lodash.camelcase';
import colors from 'colors';

const executePaths = paths =>
    /*paths.forEach(path => {
        console.log(`Executing ${camelCase(path)}`);

        require(path).default();
    });*/

    Promise.each(paths, path => {
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

export default function(processPaths = []) {
    return () => {
        if (!processPaths.length) return false;

        executePaths(processPaths);

        setInterval(() => {
            executePaths(processPaths);
        }, 10 * 1000); //15 * 60 * 1000
    };
}
