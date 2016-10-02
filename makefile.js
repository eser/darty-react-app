const fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync').create();

const isProduction = (process.env.PROD === '1');

const bundles = {
    js: {
        app: {
            file: './src/scripts/app/index.tsx',
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
            clean: [
                './dist/bundles/app.css'
            ],
            dist: './dist/bundles/'
        }
    }
};

const buildBundleKeysJs = [],
    buildBundleKeysCss = [];

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
    buildBundleKeysCss.push('build-bundles-css-' + key);
}

for (const key in bundles.js) {
    const bundle = bundles.js[key];

    jsmake.task('build-bundles-js-' + key, function (argv) {
        return new Promise(function (resolve, reject) {
            const webpack = require('webpack');

            const entries = {};

            entries[key] = bundle.file;

            const compilerOptions = {
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
                    ])
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
    buildBundleKeysJs.push('build-bundles-js-' + key);
}

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
jsmake.task('build.js', buildBundleKeysJs);
jsmake.task('build.css', buildBundleKeysCss);
jsmake.task('build', [ 'build.js', 'build.css' ]);
jsmake.task('rebuild', [ 'clean', 'build' ]);

jsmake.task('default', [ 'build', 'serve' ]);
