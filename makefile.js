const fs = require('fs'),
    path = require('path'),
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
            file: './src/styles/app.css',
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

for (const key in bundles.css) {
    const bundle = bundles.css[key];

    jsmake.task('build-bundles-css-' + key, function () {
        return new Promise(function (resolve, reject) {
            const postcss = require('postcss'),
                cssnext = require('postcss-cssnext'),
                cssnano = require('cssnano');

            const processors = [
                cssnext({
                    browsers: ['last 1 version'] // ,
                    // warnForDuplicates: false
                }),
                cssnano()
            ];

            const destFile = bundle.dist + key + '.css';

            postcss(processors)
                .process(
                    fs.readFileSync(bundle.file),
                    {
                        from: bundle.file,
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
    buildBundleKeys.push('build-bundles-css-' + key);

    jsmake.task('watch-bundles-css-' + key, [ 'build-bundles-css-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-css-' + key, files: bundle.watch });
}

for (const key in bundles.js) {
    const bundle = bundles.js[key];

    jsmake.task('build-bundles-js-' + key, function () {
        return new Promise(function (resolve, reject) {
            const rollup = require('rollup'),
                commonjs = require('rollup-plugin-commonjs'),
                env = require('rollup-plugin-env'),
                json = require('rollup-plugin-json'),
                nodeResolve = require('rollup-plugin-node-resolve'),
                uglify = require('rollup-plugin-uglify'),
                typescript = require('rollup-plugin-typescript');

            const destFile = bundle.dist + key + '.js';

            rollup.rollup({
                entry: bundle.file,
                sourceMap: true,
                dest: destFile,
                format: 'cjs',
                exports: 'none',

                globals: {
                    React: 'React'
                },

                plugins: [
                    typescript(),
                    env({ NODE_ENV: 'production' }),
                    json(),
                    nodeResolve({
                        jsnext: true,
                        main: true,
                        extensions: [
                            '.js',
                            '.jsx',
                            '.ts',
                            '.tsx'
                            // '.json'
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
                    uglify({
                        compress: {
                            screw_ie8: true,
                            warnings: false
                        },
                        output: {
                            comments: false
                        },
                        sourceMap: true
                    })
                ]
            })
                .then(function (bundle) {
                    bundle.write({
                        dest: destFile,
                        format: 'cjs',
                        sourceMap: true
                    });

                    browserSync.reload();
                    resolve();
                })
                .catch(function (ex) {
                    console.error(ex);
                    reject(ex);
                });
        });
    });
    buildBundleKeys.push('build-bundles-js-' + key);

    jsmake.task('watch-bundles-js-' + key, [ 'build-bundles-js-' + key ], browserSync.reload);
    watchBundleItems.push({ key: 'watch-bundles-js-' + key, files: bundle.watch });
}

jsmake.task('watch', function () {
    // for (const item of watchBundleItems) {
    //     gulp.watch(item.files, [ item.key ]);
    // }
});

jsmake.task('clean', function () {
    for (const bundleCategory of bundles) {
        for (const bundle of bundleCategory) {
            for (const item of bundle.clean) {
                jsmake.utils.rmdir(item);
            }
        }
    }
});

jsmake.task('serve', function () {
    const bsConfig = require('./bs-config.json');

    browserSync.init(bsConfig);
});

jsmake.task('lint', [ ]);
jsmake.task('build', buildBundleKeys);
jsmake.task('rebuild', [ 'clean', 'build' ]);
jsmake.task('live', [ 'serve', 'watch' ]);

jsmake.task('default', [ 'build', 'live' ]);
