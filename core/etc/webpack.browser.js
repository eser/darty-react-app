/* eslint-env node */
const { configWrapper, commonConfig } = require('./webpack.common');

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');

const browserConfig = configWrapper((vars) => {
    const common = commonConfig('browser')(vars.env, vars.argv);

    let assets;

    try {
        assets = require(`${vars.dirRoot}/assets.json`);
    }
    catch (ex) {
        assets = [];
    }

    let optionalPlugins = [];

    if (vars.isProduction) {
        optionalPlugins = [
            ...optionalPlugins,
            new webpack.HotModuleReplacementPlugin(),
        ];
    }

    return {
        ...common,

        target: 'web',

        entry: {
            'browser': [ './core/src/index.browser.tsx' ],
        },

        output: {
            ...common.output,
        },

        devServer: {
            historyApiFallback: true,
            open: true,
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    default: false,
                    vendors: false,

                    // vendor chunk
                    vendor: {
                        // name of the chunk
                        name: `browser-vendors`,
                        // async + async chunks
                        chunks: 'all',
                        // import file path containing node_modules
                        test: /node_modules/,
                        // priority
                        priority: 20,
                    },
                    // common chunk
                    common: {
                        name: `browser-common`,
                        minChunks: 2,
                        chunks: 'async',
                        priority: 10,
                        reuseExistingChunk: true,
                        enforce: true,
                    },
                },
            },
        },

        module: {
            rules: [
                ...common.module.rules,
                {
                    test: /\.scss$/,
                    use: [
                        ExtractCssChunksPlugin.loader,
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
                                path: path.resolve(__dirname),
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
                        ExtractCssChunksPlugin.loader,
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
                                path: path.resolve(__dirname),
                            },
                        },
                    ],
                },
                {
                    test: /\.(eot|ttf|jpe?g|png|gif|svg|ico)([\?]?.*)$/,
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
                {
                    test: /\.(woff2?)([\?]?.*)$/,
                    use: [
                        {
                            loader: 'url-loader',
                        },
                    ],
                },
            ],
        },

        plugins: [
            ...common.plugins,
            new ExtractCssChunksPlugin({
                filename: '[name].css',
                // chunkFilename: '[id].[chunkhash].css',
                chunkFilename: '[id].css',
            }),
            new CopyWebpackPlugin(
                assets.map(x => ({ from: `./src/${x}`, to: './' }))
            ),
            ...optionalPlugins,
        ],
    };
});

module.exports = browserConfig;
