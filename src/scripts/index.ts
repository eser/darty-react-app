/// <reference path="../scripts.typings/index.d.ts" />
declare var global: any;
declare var module: any;

import * as es6promise from 'es6-promise';

import { app } from './app/';

import { Main } from './app/Main';

// polyfills
if (global.Promise === undefined) {
    es6promise.polyfill();
}

// webpack
if (module.hot) {
    module.hot.accept();
}

// app
const appTargetElement: Element = document.getElementsByTagName('app')[0];

if (global.app === undefined) {
    global.app = app;
}

app.addModule(Main);
app.init();
app.renderToDOM(appTargetElement);
// app.renderToString('/').then(x => console.log(x));
