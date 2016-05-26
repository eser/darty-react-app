const gulp = require('gulp');
const browserSync = require('browser-sync').create();

const paths = {
    src: {
        typescript: 'src/scripts/**/*.ts'
    },
    dist: {
        clean: [ 'dist/**/*' ],
        typescript: 'dist/scripts/'
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
    const typescript = require('gulp-typescript');
    const tscConfig = require('./tsconfig.json');

    return gulp
        .src(paths.src.typescript)
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest(paths.dist.typescript))
        .pipe(browserSync.stream());
});

gulp.task('watch-typescript', [ 'compile-typescript' ], browserSync.reload);

gulp.task('watch', function () {
    gulp.watch(paths.src.typescript, [ 'watch-typescript' ]);
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('lint', [ 'lint-typescript' ]);
gulp.task('build', [/* 'lint', */ 'compile-typescript' ]);
gulp.task('rebuild', [ 'clean', 'build' ]);
gulp.task('live', [ 'serve', 'watch' ]);

gulp.task('default', [ 'live' ]);
