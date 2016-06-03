/// <reference path="../../scripts.typings/browser/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { appModel } from './models/appModel';
import { AppComponent } from './components/appComponent';

const model = new appModel();

ReactDOM.render(
    <AppComponent model={model} />,
    document.getElementsByTagName('app')[0]
);
