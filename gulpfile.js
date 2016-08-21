const gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();

const paths = {
    src: {
        js: './src/scripts/**/*',
        css: './src/styles/**/*.css'
    },
    dist: {
        clean: [ './dist/**/*' ],
        bundles: './dist/bundles/'
    }
};

const bundles = {
    css: {
        // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        app: [
            './src/styles/app.css'
        ]
    }
};

gulp.task('clean', function () {
    const del = require('del');

    return del(paths.dist.clean);
});

gulp.task('compile-js', function (callback) {
    const webpack = require('webpack'),
        webpackConfig = require('./webpack.config.js');

    webpack(
        webpackConfig,
        function (err, stats) {
            if (err) {
                throw new gutil.PluginError('webpack', err);
            }

            gutil.log('[webpack]', stats.toString({
                // output options
            }));
            callback();
        }
    );
});

gulp.task('watch-js', [ 'compile-js' ], browserSync.reload);

const compileBundleKeys = [];
const watchBundleItems = [];

for (let key in bundles.css) {
    const bundle = bundles.css[key];

    gulp.task('compile-bundles-css-' + key, function () {
        const postcss = require('gulp-postcss'),
            cssnext = require('postcss-cssnext'),
            concatCss = require('gulp-concat-css'),
            sourcemaps = require('gulp-sourcemaps');

        const processors = [
            cssnext({
                browsers: ['last 1 version']
            }) // ,
            // cssnano
        ];

        return gulp
            .src(bundle)
            .pipe(sourcemaps.init())
            .pipe(postcss(processors))
            .pipe(concatCss(key + '.css'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.dist.bundles))
            .pipe(browserSync.stream());
    });
    compileBundleKeys.push('compile-bundles-css-' + key);

    gulp.task('watch-bundles-css-' + key, [ 'compile-bundles-css-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-css-' + key, files: bundle });
}

gulp.task('compile-bundles', compileBundleKeys);

gulp.task('watch', function () {
    gulp.watch(paths.src.js, [ 'watch-js' ]);

    for (let key in watchBundleItems) {
        const item = watchBundleItems[key];

        gulp.watch(item.files, [ item.key ]);
    }
});

gulp.task('serve', function () {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

gulp.task('lint', [ ]);
gulp.task('build', [/* 'lint', */ 'compile-js', 'compile-bundles' ]);
gulp.task('rebuild', [ 'clean', 'build' ]);
gulp.task('live', [ 'serve', 'watch' ]);

gulp.task('default', [ 'build', 'live' ]);
