/// <reference path="../../scripts.typings/browser/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { AppModel } from './models/AppModel.ts';
import { App } from './components/App.tsx';
import { Home } from './components/App/Home.tsx';
import { EntriesByCategory } from './components/App/EntriesByCategory.tsx';
import { EntriesByTag } from './components/App/EntriesByTag.tsx';
import { Page } from './components/App/Page.tsx';

const model = new AppModel();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="category/:key/:value" component={EntriesByCategory} />
            <Route path="tag/:tag" component={EntriesByTag} />
            <Route path="page/:page" component={Page} />
        </Route>
    </Router>,
    document.getElementsByTagName('app')[0]
);
