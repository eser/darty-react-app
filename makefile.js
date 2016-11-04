const fs = require('fs'),
    path = require('path'),
    webpack = require('webpack');

// package definitions
const
    npmBinFolder = './node_modules/.bin/',
    distFolder = './dist/';

// webpack definitions
const webpackConfig = require('./webpack.config.js'),
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
    jsmake.utils.os.shell(path.join(npmBinFolder, 'webpack-bundle-analyzer') + ' ' + path.join(distFolder, 'dev.web/stats.json'));
});

// Serve Tasks
jsmake.task('serve', function (argv) {
    jsmake.utils.os.shell('node ' + path.join(__dirname, 'server.js'));
});

// Other Tasks
jsmake.task('clean', function (argv) {
    jsmake.utils.fs.rmdir(distFolder);
});

jsmake.task('lint', [ 'lint.js' ]);
jsmake.task('rebuild', [ 'clean', 'build' ]);

// jsmake.task('default', [ 'lint', 'test', 'serve' ]);
