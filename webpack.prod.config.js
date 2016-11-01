const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    devtool: 'source-map',

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
            { test: /\.js$/, loader: 'source-map-loader' }
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
        /*
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: true
        }),
        */
        new BundleAnalyzerPlugin({
            // Start analyzer HTTP-server. 
            // You can use this plugin to just generate Webpack Stats JSON file by setting `startAnalyzer` to `false` 
            // and `generateStatsFile` to `true`. 
            startAnalyzer: false,
            // Analyzer HTTP-server port 
            analyzerPort: 8888,
            // Automatically open analyzer page in default browser if `startAnalyzer` is `true` 
            openAnalyzer: true,
            // If `true`, Webpack Stats JSON file will be generated in bundles output directory 
            generateStatsFile: true,
            // Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`. 
            // Relative to bundles output directory. 
            statsFilename: 'stats.json'
        })
    ],

    postcss: function () {
        const cssnext = require('postcss-cssnext'),
            cssnano = require('cssnano');

        return [
            cssnext({
                browsers: ['last 1 version'] // ,
                // warnForDuplicates: false
            }),
            cssnano()
        ];
    }
};
