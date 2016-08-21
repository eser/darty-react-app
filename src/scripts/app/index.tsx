/// <reference path="../../scripts.typings/browser/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppModel } from './models/AppModel.ts';
import { AppComponent } from './components/AppComponent.tsx';

const model = new AppModel();

ReactDOM.render(
    <AppComponent model={model} />,
    document.getElementsByTagName('app')[0]
);
