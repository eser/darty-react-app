/// <reference path="../scripts.typings/browser.d.ts" />

declare var System: any;

System.import('app')
    .catch(function (err) {
        console.error(err);
    });
