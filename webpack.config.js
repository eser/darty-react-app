const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extractTextCSS = new ExtractTextPlugin('[name]');

const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: {
        'app.js': './src/index.ts',
        'app-styles.css': './src/app/assets/styles.scss',
        'app-fonts.css': './src/app/assets/fonts.scss',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            entryFileIsJs: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: extractTextCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        },
                        'postcss-loader',
                        'sass-loader',
                    ],
                }),
            },
            {
                test: /\.css$/,
                use: extractTextCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            },
                        },
                        'postcss-loader',
                    ],
                }),
            },
            {
                test: /\.(eot|woff2?|ttf|jpe?g|png|gif|svg|ico)([\?]?.*)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
        ],
    },

    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
        modules: [
            path.join(__dirname, 'src'),
            path.join(__dirname, 'node_modules'),
        ],
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),
        new DotenvPlugin({
            sample: './.env.default',
            path: './.env',
        }),
        new CopyWebpackPlugin([
            { from: './src/index.html', to: './' },
            { from: './src/apple-touch-icon-precomposed.png', to: './' },
            { from: './src/browserconfig.xml', to: './' },
            { from: './src/crossdomain.xml', to: './' },
            { from: './src/favicon.ico', to: './' },
            { from: './src/humans.txt', to: './' },
            { from: './src/tile-wide.png', to: './' },
            { from: './src/tile.png', to: './' },
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
        extractTextCSS,
        new BundleAnalyzerPlugin({
            // Start analyzer HTTP-server.
            // You can use this plugin to just generate Webpack Stats JSON file by setting
            // `startAnalyzer` to `false` and `generateStatsFile` to `true`.
            startAnalyzer: false,
            // Analyzer HTTP-server port
            analyzerPort: 8888,
            // Automatically open analyzer page in default browser if `startAnalyzer` is `true`
            openAnalyzer: true,
            // If `true`, Webpack Stats JSON file will be generated in bundles output directory
            generateStatsFile: true,
            // Name of Webpack Stats JSON file that will be generated if `generateStatsFile`
            // is `true`. Relative to bundles output directory.
            statsFilename: 'stats.json',
        }),
    ],
};
