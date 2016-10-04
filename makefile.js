const fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync').create();

const
    isProduction = (process.env.PROD === '1'),
    distFolder = './dist/bundles/';

const bundles = {
    js: {
        app: {
            source: './src/scripts/app/index.tsx',
            clean: [
                './dist/bundles/app.js'
            ]
        },
        vendor: {
            source: [ 'es6-promise', 'whatwg-fetch', 'jquery', 'react', 'react-dom', 'react-router' ],
            clean: [
                './dist/bundles/vendor.js'
            ]
        }
    },
    css: {
        // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        app: {
            source: './src/styles/app.css',
            clean: [
                './dist/bundles/app.css'
            ]
        }
    }
};

// CSS Tasks
const buildBundleKeysCss = [];

for (const key in bundles.css) {
    const bundle = bundles.css[key];

    jsmake.task('build-bundles-css-' + key, function (argv) {
        return new Promise(function (resolve, reject) {
            const postcss = require('postcss'),
                cssnext = require('postcss-cssnext'),
                cssnano = require('cssnano');

            const processors = [
                cssnext({
                    browsers: ['last 1 version'] // ,
                    // warnForDuplicates: false
                })
            ];

            if (isProduction || argv.prod === true) {
                processors.push(cssnano());
            }

            const destFile = distFolder + key + '.css';

            postcss(processors)
                .process(
                    fs.readFileSync(bundle.source),
                    {
                        from: bundle.source,
                        to: destFile,
                        map: {
                            inline: false
                        }
                    }
                )
                .then(function (result) {
                    fs.writeFileSync(destFile, result.css);
                    if (result.map) {
                        fs.writeFileSync(destFile + '.map', result.map);
                    }

                    browserSync.reload();
                    resolve();
                })
                .catch(function (ex) {
                    console.error(ex);
                    reject(ex);
                });
        });
    });
    buildBundleKeysCss.push('build-bundles-css-' + key);
}

jsmake.task('build.css', buildBundleKeysCss);

// JavaScript Tasks
const buildBundleEntriesJs = {};

for (const key in bundles.js) {
    const bundle = bundles.js[key];

    buildBundleEntriesJs[key] = bundle.source;
}

jsmake.task('build.js', function (argv) {
    return new Promise(function (resolve, reject) {
        const webpack = require('webpack');

        const compilerOptions = {
            entry: buildBundleEntriesJs,
            output: {
                path: distFolder,
                filename: '[name].js'
            },

            // Enable sourcemaps for debugging webpack's output.
            devtool: '#source-map',

            resolve: {
                // Add '.ts' and '.tsx' as resolvable extensions.
                extensions: [ '', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', 'index.json' ]
            },

            module: {
                loaders: [
                    // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                    { test: /\.tsx?$/, loader: 'ts-loader' },
                    { test: /\.json$/, loader: 'json-loader' }
                ],

                preLoaders: [
                    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                    { test: /\.js$/, loader: 'source-map-loader' } // ,
                    // { test: /\.tsx?$/, loader: 'tslint' }
                ]
            },

            plugins: [
                new webpack.EnvironmentPlugin([
                    'NODE_ENV'
                ]),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'vendor',
                    filename: 'vendor.js'
                })
            ]
        };

        if (isProduction || argv.prod === true) {
            compilerOptions.plugins.push(
                new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    },
                    comments: false,
                    sourceMap: true
                })
            );
        }

        const compiler = webpack(compilerOptions);

        compiler.run(function (err, result) {
            if (err) {
                console.error(err);
                reject(err);

                return;
            }

            resolve(result);
            console.log(result.toString({ chunks: false, colors: true }));
            browserSync.reload();
        });
    });
});

// Other Tasks
jsmake.task('clean', function (argv) {
    for (const bundleCategory of bundles) {
        for (const bundle of bundleCategory) {
            for (const item of bundle.clean) {
                jsmake.utils.rmdir(item);
            }
        }
    }
});

jsmake.task('serve', function (argv) {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

jsmake.task('lint', [ ]);
jsmake.task('build', [ 'build.js', 'build.css' ]);
jsmake.task('rebuild', [ 'clean', 'build' ]);

jsmake.task('default', [ 'build', 'serve' ]);
