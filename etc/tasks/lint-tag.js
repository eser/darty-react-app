(function () {
    'use strict';

    var gulp = require('gulp'),
        config = require('../config/tasks.common'),
        handleErrors = require('../utils/handleErrors'),
        resolvePath = require('../utils/resolvePath'),
        taskList = [];

    Object.keys(config.bundles).forEach(function (item) {
        var bundle = config.bundles[item],
            taskName = 'lint-tag:' + item;

        gulp.task(taskName, ['eolfix-tag']);

        taskList.push(taskName);
    });

    gulp.task('lint-tag', taskList);

}());
