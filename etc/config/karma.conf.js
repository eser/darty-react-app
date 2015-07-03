/*global module */
module.exports = function (config) {
    'use strict';

    config.set({
        basePath: '../../',
        frameworks: ['jasmine'],
        files: [
            'assets/scripts/**/*.js',
            'client/tests/**/*.js'
        ],
        exclude: [],
        preprocessors: {
            'client/tests/**/*.js': ['coverage']
        },
        reporters: ['dots', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        coverageReporter: {
            type: 'lcov',
            dir: 'client/build/reports/coverage/'
        }
    });
};
