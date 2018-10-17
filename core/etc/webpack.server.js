/* eslint-env node */
const { configWrapper, commonConfig } = require('./webpack.common');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const serverConfig = configWrapper((vars) => {
    const common = commonConfig('server')(vars.env, vars.argv);

    // const packageJson = require(`${vars.dirRoot}/package.json`);
    // const whiteListModules = [
    //     ...Object.keys(packageJson.dependencies || {}),
    //     ...Object.keys(packageJson.devDependencies || {}),
    // ];

    return {
        ...common,

        target: 'node',
        externals: [
            nodeExternals({
                whitelist: /^(?!fs$|path$|express$|webpack$).*/, // anything but fs, path, express and webpack
            }),
        ],

        entry: {
            'server': [ './core/src/index.server.tsx' ],
        },

        output: {
            ...common.output,
            // library: 'app',
            libraryExport: 'default',
            libraryTarget: 'commonjs2',
        },

        module: {
            rules: [
                ...common.module.rules,
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'css-loader/locals',
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'css-loader/locals',
                        },
                    ],
                },
                {
                    test: /\.(eot|ttf|jpe?g|png|gif|svg|ico)([\?]?.*)$/,
                    use: [
                        {
                            loader: 'file-loader?emitFile=false'
                        },
                    ],
                },
                {
                    test: /\.(woff2?)([\?]?.*)$/,
                    use: [
                        {
                            loader: 'url-loader?emitFile=false',
                        },
                    ],
                },
            ],
        },

        plugins: [
            ...common.plugins,
            new webpack.NamedModulesPlugin(),
        ],
    };
});

module.exports = serverConfig;
