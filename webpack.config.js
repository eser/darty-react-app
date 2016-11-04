const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
    cssnext = require('postcss-cssnext'),
    cssnano = require('cssnano');

const extractTextCSS = new ExtractTextPlugin('[name]');

const isProduction = (process.env.NODE_ENV === 'production'),
    isTargetedNode = (process.env.TARGET === 'node');

const config = {
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
            'bootstrap-sass/assets/stylesheets/_bootstrap.scss',
            'font-awesome/scss/font-awesome.scss'
        ],
        app: [
            './src/scripts/index.ts'
        ],
        'app.css': [
            './src/styles/app.css'
        ]
    },

    output: {
        filename: '[name].js'
    },

    resolve: {
        extensions: [ '', '.js', '.jsx', '.ts', '.tsx', '.js' ]
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: [ ] },
            { test: /\.jsx$/, exclude: /node_modules/, loaders: [ 'babel-loader?presets=react' ] },
            { test: /\.tsx?$/, exclude: /node_modules/, loaders: [ 'ts-loader' ] },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.scss$/, loader: extractTextCSS.extract('style', [ 'css-loader?sourceMap', 'postcss-loader?parser=postcss-scss', 'sass-loader?sourceMap' ]) },
            { test: /\.css$/, loader: extractTextCSS.extract('style', [ 'css-loader?sourceMap', 'postcss-loader' ]) },
            { test: /\.(eot|woff|woff2|ttf|jpe?g|png|gif|svg|ico)([\?]?.*)$/, loader: 'file-loader?name=asset.[hash].[ext]' }
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
        extractTextCSS,
        new HtmlWebpackPlugin({
            filename: '../../index.html',
            template: './src/index.html.ejs',
            inject: false
        }),
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
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    compiler: {
        hash_type: 'hash',
        stats: {
            chunks: false,
            chunkModules: false,
            colors: true,
        }
    },

    postcss: [
        cssnext({
            browsers: ['last 2 versions'] // ,
            // warnForDuplicates: false
        })
    ]
};

if (isProduction) {

    // prod.node
    if (isTargetedNode) {
        config.target = 'node';

        config.output.libraryTarget = 'commonjs';
        config.output.path = path.resolve('./dist/prod.node/');
        config.output.publicPathHtml = './dist/prod.node/';
        config.output.publicPath = './';
    }
    // prod.web
    else {
        config.devtool = 'source-map';
        config.target = 'web';

        config.output.path = path.resolve('./dist/prod.web/');
        config.output.publicPathHtml = './dist/prod.web/';
        config.output.publicPath = './';
/*
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: true
        }));
*/
        config.postcss.push(cssnano());
    }

    // prod.*
    config.module.preLoaders.push({ test: /\.js$/, loader: 'source-map-loader' });

}
else {

    // dev.node
    if (isTargetedNode) {
        config.target = 'node';

        config.output.libraryTarget = 'commonjs';
        config.output.path = path.resolve('./dist/dev.node/');
        config.output.publicPathHtml = './dist/dev.node/';
        config.output.publicPath = './';
    }
    // dev.web
    else {
        config.devtool = 'eval';
        config.target = 'web';

        config.output.path = path.resolve('./dist/dev.web/');
        config.output.publicPathHtml = './dist/dev.web/';
        config.output.publicPath = './';

        config.entry.app.push('webpack-hot-middleware/client');
        config.module.loaders[0].loaders.unshift('react-hot-loader/webpack');
        config.module.loaders[1].loaders.unshift('react-hot-loader/webpack');
        config.module.loaders[2].loaders.unshift('react-hot-loader/webpack');
        config.plugins.push(new webpack.HotModuleReplacementPlugin());
        config.plugins.push(new webpack.NoErrorsPlugin());
    }

}

module.exports = config;
