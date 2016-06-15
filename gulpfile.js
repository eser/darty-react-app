const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

const paths = {
    src: {
        typescript: [ 'src/scripts/**/*.ts', 'src/scripts/**/*.tsx' ],
        css: 'src/styles/**/*.css'
    },
    dist: {
        clean: [ 'dist/**/*' ],
        typescript: 'dist/scripts/',
        css: 'dist/styles/',
        bundles: 'dist/bundles/'
    }
};

const bundles = {
    js: {
        globalPreload: [
            'node_modules/core-js/client/shim.min.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js',
            'dist/scripts/systemjs.config.js'
        ],
        globalPostload: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'dist/scripts/loader.js'
        ]
    },
    css: {
        global: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'dist/styles/main.css'
        ]
    }
};

gulp.task('clean', function () {
    const del = require('del');

    return del(paths.dist.clean);
});

gulp.task('lint-typescript', function () {
    const tslint = require('gulp-tslint');

    return gulp
        .src(paths.src.typescript)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('compile-typescript', function () {
    const typescript = require('gulp-typescript'),
        tscConfig = require('./tsconfig.json');

    return gulp
        .src(paths.src.typescript)
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest(paths.dist.typescript))
        .pipe(browserSync.stream());
});

gulp.task('compile-css', function () {
    const postcss = require('gulp-postcss'),
        sourcemaps = require('gulp-sourcemaps'),
        cssnext = require('postcss-cssnext'); // ,
        // cssnano = require('cssnano');

    const processors = [
        cssnext({
            browsers: ['last 1 version']
        }) // ,
        // cssnano
    ];

    return gulp
        .src(paths.src.css)
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(browserSync.stream());
});

gulp.task('watch-typescript', [ 'compile-typescript' ], browserSync.reload);
gulp.task('watch-css', [ 'compile-css' ], browserSync.reload);

const compileBundleKeys = [];
const watchBundleItems = [];

for (let key in bundles.js) {
    const bundle = bundles.js[key];

    gulp.task('compile-bundles-js-' + key, function () {
        const concat = require('gulp-concat'),
            sourcemaps = require('gulp-sourcemaps');

        return gulp
            .src(bundle)
            .pipe(sourcemaps.init())
            .pipe(concat(key + '.js'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.dist.bundles))
            .pipe(browserSync.stream());
    });
    compileBundleKeys.push('compile-bundles-js-' + key);

    gulp.task('watch-bundles-js-' + key, [ 'compile-bundles-js-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-js-' + key, files: bundle });
}

for (let key in bundles.css) {
    const bundle = bundles.css[key];

    gulp.task('compile-bundles-css-' + key, function () {
        const concatCss = require('gulp-concat-css'),
            sourcemaps = require('gulp-sourcemaps');

        return gulp
            .src(bundle)
            .pipe(sourcemaps.init())
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
    gulp.watch(paths.src.typescript, [ 'watch-typescript' ]);
    gulp.watch(paths.src.css, [ 'watch-css' ]);

    for (let key in watchBundleItems) {
        const item = watchBundleItems[key];

        gulp.watch(item.files, [ item.key ]);
    }
});

gulp.task('serve', function () {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

gulp.task('lint', [ 'lint-typescript' ]);
gulp.task('build', [/* 'lint', */ 'compile-typescript', 'compile-css', 'compile-bundles' ]);
gulp.task('rebuild', [ 'clean', 'build' ]);
gulp.task('live', [ 'serve', 'watch' ]);

gulp.task('default', [ 'live' ]);

