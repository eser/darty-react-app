const gulp = require('gulp'),
    browserSync = require('browser-sync').create();

const bundles = {
    js: {
        app: {
            file: './src/scripts/app/index.tsx',
            watch: [
                './src/scripts/app/**/*'
            ],
            clean: [
                './dist/bundles/app.js'
            ],
            dist: './dist/bundles/'
        }
    },
    css: {
        // 'node_modules/bootstrap/dist/css/bootstrap.min.css',
        app: {
            files: [
                './src/styles/app.css'
            ],
            watch: [
                './src/styles/**/*'
            ],
            clean: [
                './dist/bundles/app.css'
            ],
            dist: './dist/bundles/'
        }
    }
};

const buildBundleKeys = [];
const watchBundleItems = [];

for (let key in bundles.css) {
    const bundle = bundles.css[key];

    gulp.task('build-bundles-css-' + key, function () {
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
            .src(bundle.files)
            .pipe(sourcemaps.init())
            .pipe(postcss(processors))
            .pipe(concatCss(key + '.css'))
            .pipe(gulp.dest(bundle.dist))
            .pipe(sourcemaps.write())
            .pipe(browserSync.stream());
    });
    buildBundleKeys.push('build-bundles-css-' + key);

    gulp.task('watch-bundles-css-' + key, [ 'build-bundles-css-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-css-' + key, files: bundle.watch });
}

for (let key in bundles.js) {
    const bundle = bundles.js[key];

    gulp.task('build-bundles-js-' + key, function () {
        const rollup = require('gulp-rollup-stream'),
            env = require('rollup-plugin-env'),
            nodeResolve = require('rollup-plugin-node-resolve'),
            commonjs = require('rollup-plugin-commonjs'),
            typescript = require('rollup-plugin-typescript'),
            // sourcemaps = require('gulp-sourcemaps'),
            rename = require('gulp-rename');

        return gulp
            .src(bundle.file)
            // .pipe(sourcemaps.init())
            .pipe(rollup({
                sourceMap: true,
                dest: key + '.js',
                format: 'cjs',
                exports: 'none',

                globals: {
                    React: 'React'
                },

                plugins: [
                    env({ NODE_ENV: 'production' }),
                    nodeResolve({
                        jsnext: true,
                        main: true,
                        extensions: [
                            '.js', '.jsx', '.ts', '.tsx', '.json'
                        ],
                        preferBuiltins: true
                    }),
                    commonjs({
                        include: 'node_modules/**',
                        namedExports: {
                            'node_modules/react/react.js': [ 'PropTypes', 'Component', 'createElement' ],
                            'node_modules/react-dom/index.js': [ 'render' ]
                        }
                    }),
                    typescript()
                ]
            }))
            .pipe(rename(key + '.js'))
            // .pipe(sourcemaps.write())
            .pipe(gulp.dest(bundle.dist))
            .pipe(browserSync.stream());
    });
    buildBundleKeys.push('build-bundles-js-' + key);

    gulp.task('watch-bundles-js-' + key, [ 'build-bundles-js-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-js-' + key, files: bundle.watch });
}

gulp.task('watch', function () {
    for (let item of watchBundleItems) {
        gulp.watch(item.files, [ item.key ]);
    }
});

gulp.task('clean', function () {
    const del = require('del');

    const cleanFiles = [];
    for (let bundleCategory of bundles) {
        for (let bundle of bundleCategory) {
            for (let item of bundle.clean) {
                cleanFiles.push(item);
            }
        }
    }

    return del(cleanFiles);
});

gulp.task('serve', function () {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

gulp.task('lint', [ ]);
gulp.task('build', buildBundleKeys);
gulp.task('rebuild', [ 'clean', 'build' ]);
gulp.task('live', [ 'serve', 'watch' ]);

gulp.task('default', [ 'build', 'live' ]);
