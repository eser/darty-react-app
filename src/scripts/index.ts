/// <reference path="../scripts.typings/index.d.ts" />
declare var global: any;

import * as es6promise from 'es6-promise';

import * as app from './app/index.tsx';

if (global.Promise === undefined) {
    es6promise.polyfill();
}

app.init();
