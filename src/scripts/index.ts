/// <reference path="../scripts.typings/index.d.ts" />
declare var global: any;

import * as es6promise from 'es6-promise';

import { app } from './app/index';

// polyfills
if (global.Promise === undefined) {
    es6promise.polyfill();
}

// app
if (global.app === undefined) {
    global.app = app;
}

app.init();
