declare var global: any;
declare var module: any;
declare var require: (module: string) => any;

import { HashRouter } from 'react-router-dom';

import { AppManagerBuilder } from './appManager';

import { AppContainer } from './app/appContainer';

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

const appManager = new AppManagerBuilder()
    .useRouter(HashRouter, { hashType: 'slash' })
    // .useRouter(BrowserRouter)
    .add('/', AppContainer)
    .build();

export {
    appManager,
};

export default appManager;
