const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/scripts/app/index.tsx'
    },
    output: {
        path: './dist/bundles/',
        filename: '[name].js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ '', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', 'index.json' ]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.json$/, loader: 'json-loader' }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: 'source-map-loader' } // ,
            // { test: /\.tsx?$/, loader: 'tslint' }
        ]
    },

    plugins: [
    ]
};
