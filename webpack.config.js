/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('webpack-dotenv-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const dirRoot = __dirname;

const envValue = process.env.NODE_ENV || 'development';
const isProduction = (envValue === 'production');

module.exports = {
    target: 'web',
    mode: isProduction ? 'production' : 'development',

    entry: {
        'app': './src/index.ts',
        'app-styles.css': './src/app/assets/styles.scss',
        'app-fonts.css': './src/app/assets/fonts.scss',
    },

    output: {
        path: path.join(dirRoot, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].[chunkhash].js',
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
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
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
            path.join(dirRoot, 'src'),
            path.join(dirRoot, 'node_modules'),
        ],
    },

    plugins: [
        // new CleanWebpackPlugin(
        //     [ 'dist' ],
        //     { root: dirRoot },
        // ),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(envValue),
            },
        }),
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]',
            chunkFilename: '[id]',
        }),
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

    stats: {
        children: false,
        colors: true,
        entrypoints: true,
        env: true,
        modules: false,
    },
};
