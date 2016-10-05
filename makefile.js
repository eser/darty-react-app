const fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack');

// package definitions
const
    isProduction = (
        process.env.NODE_ENV === 'production' ||
        process.env.PROD === '1'
    ),
    npmBinFolder = './node_modules/.bin/',
    distFolder = './dist/bundles/',
    distPublicFolder = '/dist/bundles/';

const bundles = {
    js: {
        app: {
            source: [
                './src/scripts/index.ts'
            ],
            clean: [
                './dist/bundles/app.js',
                './dist/bundles/app.js.map'
            ]
        },
        vendor: {
            source: [
                'es6-promise',
                'whatwg-fetch',
                'jquery',
                'react',
                'react-dom',
                'react-router',
                'history'
            ],
            clean: [
                './dist/bundles/vendor.js',
                './dist/bundles/vendor.js.map'
            ]
        }
    },
    css: {
        // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        app: {
            source: './src/styles/app.css',
            clean: [
                './dist/bundles/app.css',
                './dist/bundles/app.css.map'
            ]
        }
    }
};

const watchFolders = [
    {
        match: './*.{html,htm}',
        tasks: []
    },
    {
        match: './src/scripts/**',
        tasks: [
            'build.js'
        ]
    },
    {
        match: './src/styles/**',
        tasks: [
            'build.css'
        ]
    }
];

// webpack definitions
const buildBundleEntriesJs = {};

for (const key in bundles.js) {
    const bundle = bundles.js[key];

    if (isProduction) {
        buildBundleEntriesJs[key] = bundle.source;
    }
    else {
        buildBundleEntriesJs[key] = [ 'webpack/hot/dev-server', 'webpack-hot-middleware/client' ].concat(bundle.source);
    }
}

const bundlerOptions = {
    entry: buildBundleEntriesJs,
    output: {
        path: path.resolve(distFolder),
        publicPath: distPublicFolder,
        filename: '[name].js'
    },

    resolve: {
        extensions: [ '', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', 'index.json' ]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loaders: [ 'react-hot-loader/webpack', 'ts-loader' ] },
            { test: /\.json$/, loaders: [ 'json-loader' ] }
        ],

        preLoaders: [
        ]
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

if (isProduction) {
    // Enable sourcemaps for debugging webpack's output.
    bundlerOptions.devtool = 'source-map';

    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
    bundlerOptions.module.preLoaders.push(
        { test: /\.js$/, loader: 'source-map-loader' }
    );

    bundlerOptions.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false,
            sourceMap: true
        })
    );
}
else {
    bundlerOptions.devTool = 'eval-source-map';
}

const bundler = webpack(bundlerOptions);

// CSS Tasks
const buildBundleKeysCss = [];

for (const key in bundles.css) {
    const bundle = bundles.css[key];

    jsmake.task('build.css.bundles.' + key, function (argv) {
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
    buildBundleKeysCss.push('build.css.bundles.' + key);
}

jsmake.task('build.css', buildBundleKeysCss);

// JavaScript Tasks
jsmake.task('build.js', function (argv) {
    return new Promise(function (resolve, reject) {
        bundler.run(function (err, result) {
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

jsmake.task('lint.js', function (argv) {
    jsmake.utils.shell(npmBinFolder + 'eslint ./src/scripts/ --ext .js,.jsx');
});

// Other Tasks
jsmake.task('clean', function (argv) {
    for (const bundleCategoryKey in bundles) {
        const bundleCategory = bundles[bundleCategoryKey];

        for (const bundleKey in bundleCategory) {
            const bundle = bundleCategory[bundleKey];

            for (const item in bundle.clean) {
                jsmake.utils.rmdir(bundle.clean[item]);
            }
        }
    }
});

jsmake.task('serve', function (argv) {
    for (const watchFolderKey in watchFolders) {
        const watchFolder = watchFolders[watchFolderKey];

        browserSync.watch(
            watchFolder.match,
            function (event, file) {
                if (event !== 'change') {
                    return;
                }

                const runContext = jsmake.createRunContext();

                runContext.setArgv({
                    match: watchFolder.match,
                    file: file
                });

                for (taskKey in watchFolder.tasks) {
                    const task = watchFolder.tasks[taskKey];

                    runContext.addTask(jsmake.tasks[task]);
                }

                runContext.runExecutionQueue()
                    .then(function () {
                        browserSync.reload(watchFolder.match);
                    })
                    .catch(function (ex) {
                        console.error(ex);
                    });
            }
        );
    }

    const webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware');

    browserSync.init({
        injectChanges: false,
        watchOptions: {
            ignored: 'node_modules'
        },
        server: {
            baseDir: './',
            // directory: true,
            index: 'index.html',
            middleware: [
                webpackDevMiddleware(
                    bundler,
                    {
                        publicPath: bundlerOptions.output.publicPath,
                        stats: { colors: true }
                    }
                ),
                webpackHotMiddleware(bundler)
            ]
        }
    });
});

jsmake.task('lint', [ 'lint.js' ]);
jsmake.task('build', [ 'build.js', 'build.css' ]);
jsmake.task('rebuild', [ 'clean', 'build' ]);

// jsmake.task('default', [ 'lint', 'build', 'serve' ]);
