/// <reference path="../scripts.typings/index.d.ts" />
declare var global: any;

import * as es6promise from 'es6-promise';

import { app } from './app/';

import { Main } from './app/Main';

// polyfills
if (global.Promise === undefined) {
    es6promise.polyfill();
}

// app
const appTargetElement: Element = document.getElementsByTagName('app')[0];

if (global.app === undefined) {
    global.app = app;
}

app.addModule(Main);
app.init();
app.renderToDOM(appTargetElement);
