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
        css: 'dist/styles/'
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

gulp.task('watch', function () {
    gulp.watch(paths.src.typescript, [ 'watch-typescript' ]);
    gulp.watch(paths.src.css, [ 'watch-css' ]);
});

gulp.task('serve', function () {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

gulp.task('lint', [ 'lint-typescript' ]);
gulp.task('build', [/* 'lint', */ 'compile-typescript', 'compile-css' ]);
gulp.task('rebuild', [ 'clean', 'build' ]);
gulp.task('live', [ 'serve', 'watch' ]);

gulp.task('default', [ 'live' ]);

