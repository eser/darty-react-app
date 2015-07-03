(function () {
    'use strict';

    var gulp = require('gulp'),
        config = require('../config/tasks.common'),
        del = require('del'),
        handleErrors = require('../utils/handleErrors'),
        resolvePath = require('../utils/resolvePath'),
        riot = require('gulp-riot'),
        taskList = [],
        taskListClean = [];

    Object.keys(config.bundles).forEach(function (item) {
        var bundle = config.bundles[item],
            taskName = 'preprocess-tag:' + item,
            taskNameClean = 'preprocess-tag-clean:' + item,
            tempDir = resolvePath('~/' + item + '/tag');

        gulp.task(taskNameClean, function (cb) {
            del(tempDir, cb);
        });

        gulp.task(taskName, [taskNameClean], function () {
            return gulp.src(bundle.tagFiles)
                .on('error', handleErrors)
                .pipe(riot({
                    compact: false
                }))
                .pipe(gulp.dest(tempDir));
        });

        taskList.push(taskName);
        taskListClean.push(taskNameClean);
    });

    gulp.task('preprocess-tag', taskList);
    gulp.task('preprocess-tag-clean', taskListClean);

}());
