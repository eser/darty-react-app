const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

const paths = {
    src: {
        typescript: 'src/scripts/**/*.ts',
        scss: 'src/styles/**/*.scss'
    },
    dist: {
        clean: [ 'dist/**/*' ],
        typescript: 'dist/scripts/',
        scss: 'dist/styles/'
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

gulp.task('compile-sass', function () {
    const sass = require('gulp-sass'),
        sourcemaps = require('gulp-sourcemaps');

    const sassInstance = sass()
        .on('error', sass.logError);

    return gulp
        .src(paths.src.scss)
        .pipe(sourcemaps.init())
        .pipe(sassInstance)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.dist.scss))
        .pipe(browserSync.stream());
});

gulp.task('watch-typescript', [ 'compile-typescript' ], browserSync.reload);
gulp.task('watch-sass', [ 'compile-sass' ], browserSync.reload);

gulp.task('watch', function () {
    gulp.watch(paths.src.typescript, [ 'watch-typescript' ]);
    gulp.watch(paths.src.scss, [ 'watch-sass' ]);
});

gulp.task('serve', function () {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

gulp.task('lint', [ 'lint-typescript' ]);
gulp.task('build', [/* 'lint', */ 'compile-typescript', 'compile-sass' ]);
gulp.task('rebuild', [ 'clean', 'build' ]);
gulp.task('live', [ 'serve', 'watch' ]);

gulp.task('default', [ 'live' ]);
