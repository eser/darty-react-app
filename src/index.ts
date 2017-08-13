declare var global: any;

import { appManager } from './startup';

const targetElement = document.getElementsByTagName('app')[0];
appManager.renderToDOM(targetElement);
// appManager.renderToString('/').then(x => console.log(x));
