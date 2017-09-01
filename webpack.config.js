const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob_entries = require('webpack-glob-entries');
const values = require('object.values');

const sassEntryPaths = values(glob_entries('./app/lib/scss/**/*.scss'));

const entries = []
    .concat(sassEntryPaths)
    .concat(path.join(__dirname, 'app/lib/js/index.js'));

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, 'app/public'),
        filename: './js/bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname,
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoader: 2,
                                camelCase: false,
                                localIdentName: '[local]',
                            },
                        },
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader',
            },
        ],
    },
    plugins: [
        new Dotenv({ safe: true }),
        new ExtractTextPlugin('./css/bundle.css'),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.join(__dirname, './'), 'node_modules'],
    },
};
