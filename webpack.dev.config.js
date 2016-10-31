const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        'vendor.css': [
            './src/styles/vendor.css'
        ],
        app: [
            'webpack/hot/dev-server',
            'webpack-hot-middleware/client',
            './src/scripts/index.ts'
        ],
        'app.css': [
            './src/styles/app.css'
        ]
    },

    output: {
        path: path.resolve('./dist/bundles/'),
        publicPath: '/dist/bundles/',
        filename: '[name].js'
    },

    resolve: {
        extensions: [ '', '.js', '.jsx', '.ts', '.tsx', '.js' ]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loaders: [ 'react-hot-loader/webpack', 'ts-loader' ] },
            { test: /\.json$/, loaders: [ 'json-loader' ] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', [ 'css-loader?sourceMap&importLoaders=1', 'postcss-loader' ]) }
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
        new ExtractTextPlugin('[name]'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    postcss: function () {
        const cssnext = require('postcss-cssnext');

        return [
            cssnext({
                browsers: ['last 1 version'] // ,
                // warnForDuplicates: false
            })
        ];
    }
};
