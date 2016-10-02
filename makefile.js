const fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync').create();

const bundles = {
    js: {
        app: {
            file: './src/scripts/app/index.tsx',
            watch: [
                './src/scripts/app/**/*'
            ],
            clean: [
                './dist/bundles/app.js'
            ],
            dist: './dist/bundles/'
        }
    },
    css: {
        // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        app: {
            file: './src/styles/app.css',
            watch: [
                './src/styles/**/*'
            ],
            clean: [
                './dist/bundles/app.css'
            ],
            dist: './dist/bundles/'
        }
    }
};

const buildBundleKeys = [];
const watchBundleItems = [];

for (const key in bundles.css) {
    const bundle = bundles.css[key];

    jsmake.task('build-bundles-css-' + key, function () {
        return new Promise(function (resolve, reject) {
            const postcss = require('postcss'),
                cssnext = require('postcss-cssnext'),
                cssnano = require('cssnano');

            const processors = [
                cssnext({
                    browsers: ['last 1 version'] // ,
                    // warnForDuplicates: false
                }),
                cssnano()
            ];

            const destFile = bundle.dist + key + '.css';

            postcss(processors)
                .process(
                    fs.readFileSync(bundle.file),
                    {
                        from: bundle.file,
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
    buildBundleKeys.push('build-bundles-css-' + key);

    jsmake.task('watch-bundles-css-' + key, [ 'build-bundles-css-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-css-' + key, files: bundle.watch });
}

for (const key in bundles.js) {
    const bundle = bundles.js[key];

    jsmake.task('build-bundles-js-' + key, function () {
        return new Promise(function (resolve, reject) {
            const webpack = require('webpack');

            const entries = {};

            entries[key] = bundle.file;

            const compiler = webpack({
                entry: entries,
                output: {
                    path: bundle.dist,
                    filename: '[name].js'
                },

                // Enable sourcemaps for debugging webpack's output.
                devtool: 'source-map',

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
                    new webpack.optimize.UglifyJsPlugin({
                        compress: {
                            warnings: false
                        },
                        comments: false,
                        sourceMap: true
                    })
                ]
            });

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
    buildBundleKeys.push('build-bundles-js-' + key);

    jsmake.task('watch-bundles-js-' + key, [ 'build-bundles-js-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-js-' + key, files: bundle.watch });
}

jsmake.task('watch', function () {
    // for (const item of watchBundleItems) {
    //     gulp.watch(item.files, [ item.key ]);
    // }
});

jsmake.task('clean', function () {
    for (const bundleCategory of bundles) {
        for (const bundle of bundleCategory) {
            for (const item of bundle.clean) {
                jsmake.utils.rmdir(item);
            }
        }
    }
});

jsmake.task('serve', function () {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

jsmake.task('lint', [ ]);
jsmake.task('build', buildBundleKeys);
jsmake.task('rebuild', [ 'clean', 'build' ]);
jsmake.task('live', [ 'serve', 'watch' ]);

jsmake.task('default', [ 'build', 'live' ]);
