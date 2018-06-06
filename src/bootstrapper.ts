declare var global: any;
declare var module: any;
declare var require: (module: string) => any;

import { HashRouter } from 'react-router-dom';

import AppContainer from './app/appContainer';
import { AppStackBuilder } from './appStack';

// polyfills
if (global.Promise === undefined) {
    const es6promise = require('es6-promise');

    es6promise.polyfill();
}

if (global.fetch === undefined) {
    require('whatwg-fetch');
}

// webpack
if (module.hot !== undefined) {
    module.hot.accept();
}

const appStack = new AppStackBuilder()
    .useRouter(HashRouter, { hashType: 'slash' })
    // .useRouter(BrowserRouter)
    .add('/', AppContainer)
    .build();

export {
    appStack,
};
