const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extractTextSASS = new ExtractTextPlugin('[name]'),
    extractTextCSS = new ExtractTextPlugin('[name]');

module.exports = {
    devtool: 'eval-source-map',

    entry: {
        vendor: [
            'es6-promise',
            'whatwg-fetch',
            'jquery',
            'bootstrap',
            'react',
            'react-dom',
            'react-router',
            'history'
        ],
        'vendor.css': [
            'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
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
            { test: /\.scss$/, loader: extractTextSASS.extract('style', [ 'css-loader?sourceMap&importLoaders=1', 'postcss-loader?parser=postcss-scss', 'sass-loader?sourceMap' ]) },
            { test: /\.css$/, loader: extractTextCSS.extract('style', [ 'css-loader?sourceMap&importLoaders=1', 'postcss-loader' ]) },
            { test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: 'file-loader?prefix=font' }
        ],

        preLoaders: [
        ]
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: [ 'vendor' ],
            filename: '[name].js',
            minChunks: Infinity
        }),
        extractTextSASS,
        extractTextCSS,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
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
        const cssnext = require('postcss-cssnext');

        return [
            cssnext({
                browsers: ['last 1 version'] // ,
                // warnForDuplicates: false
            })
        ];
    }
};
