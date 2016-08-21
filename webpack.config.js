const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [ 'whatwg-fetch', 'jquery', 'react', 'react-dom', 'react-router' ],
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
        extensions: [ '', '.webpack.js', '.web.js', '.ts', '.tsx', '.js' ]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        })
    ]
};
