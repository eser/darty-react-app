const path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        vendor: [
            'es6-promise',
            'whatwg-fetch',
            'jquery',
            'react',
            'react-dom',
            'react-router',
            'history'
        ],
        app: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',
            './src/scripts/index.ts'
        ]
    },

    output: {
        path: path.resolve('./dist/bundles/'),
        publicPath: '/dist/bundles/',
        filename: '[name].js'
    },

    resolve: {
        extensions: [ '', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', 'index.json' ]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loaders: [ 'react-hot-loader/webpack', 'ts-loader' ] },
            { test: /\.json$/, loaders: [ 'json-loader' ] }
        ],

        preLoaders: [
        ]
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ],
            filename: '[name].js',
            minChunks: Infinity
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
