const fs = require('fs'),
    path = require('path'),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack');

// package definitions
const
    isProduction = (
        process.env.NODE_ENV === 'production'
    ),
    npmBinFolder = './node_modules/.bin/',
    distFolder = './dist/bundles/',
    distPublicFolder = '/dist/bundles/';

const bundles = {
    js: {
        vendor: {
            target: 'web',
            clean: [
                './dist/bundles/vendor.js',
                './dist/bundles/vendor.js.map'
            ]
        },
        app: {
            target: 'web',
            clean: [
                './dist/bundles/app.js',
                './dist/bundles/app.js.map'
            ]
        }
    },
    css: {
        app: {
            target: 'web',
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
            'build'
        ]
    },
    {
        match: './src/styles/**',
        tasks: [
            'build'
        ]
    }
];

// webpack definitions
const webpackTemplateFile = (isProduction) ? './webpack.prod.config.js' : './webpack.dev.config.js',
    webpackTemplate = require(webpackTemplateFile),
    bundler = webpack(webpackTemplate);

jsmake.task('build', function (argv) {
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

// Test Tasks
jsmake.task('test', function (argv) {
    jsmake.utils.shell(npmBinFolder + 'mocha --compilers ts:typescript-require --recursive ./test/');
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

                const runContext = jsmake.createRunContext({
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
                        publicPath: webpackTemplate.output.publicPath,
                        stats: { colors: true }
                    }
                ),
                webpackHotMiddleware(bundler)
            ]
        }
    });
});

jsmake.task('lint', [ 'lint.js' ]);
jsmake.task('rebuild', [ 'clean', 'build' ]);

// jsmake.task('default', [ 'lint', 'build', 'serve' ]);
