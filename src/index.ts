/* eslint-env browser */
declare var global: any;

import { appStack } from './bootstrapper';

const targetElement = document.getElementsByTagName('app')[0];
appStack.renderToDOM(targetElement);
// appStack.renderToString('/').then(x => console.log(x));
