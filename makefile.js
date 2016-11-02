const fs = require('fs'),
    path = require('path'),
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
const webpackConfigFile = (isProduction) ? './webpack.prod.config.js' : './webpack.dev.config.js',
    webpackConfig = require(webpackConfigFile),
    bundler = webpack(webpackConfig);

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
        });
    });
});

jsmake.task('lint.js', function (argv) {
    jsmake.utils.os.shell(path.join(npmBinFolder, 'eslint') + ' ./src/scripts/ --ext .js,.jsx');
});

// Test Tasks
jsmake.task('test', function (argv) {
    jsmake.utils.os.shell(path.join(npmBinFolder, 'mocha') + ' --compilers ts:typescript-require --recursive ./test/');
});

// Stats Tasks
jsmake.task('stats', function (argv) {
    jsmake.utils.os.shell(path.join(npmBinFolder, 'webpack-bundle-analyzer') + ' ' + path.join(distFolder, 'stats.json'));
});

// Serve Tasks
jsmake.task('serve', function (argv) {
    const webpackDevServer = require('webpack-dev-server');

    new webpackDevServer(
        bundler,
        {
            publicPath: webpackConfig.output.publicPath,
            historyApiFallback: true,
            hot: true
        }
    ).listen(
        8080,
        'localhost',
        function (err, result) {
            if (err) {
                console.error(err);

                return;
            }

            console.log('Listening at http://localhost:8080/');
        }
    );
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

jsmake.task('lint', [ 'lint.js' ]);
jsmake.task('rebuild', [ 'clean', 'build' ]);

// jsmake.task('default', [ 'lint', 'build', 'serve' ]);
