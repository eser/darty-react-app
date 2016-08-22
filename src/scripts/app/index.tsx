/// <reference path="../../scripts.typings/browser/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { App } from './components/App.tsx';
import { Home } from './components/App/Home.tsx';
import { EntriesByCategory } from './components/App/EntriesByCategory.tsx';
import { EntriesByTag } from './components/App/EntriesByTag.tsx';
import { Page } from './components/App/Page.tsx';
import { PageByName } from './components/App/PageByName.tsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="category/:key/:value" component={EntriesByCategory} />
            <Route path="tag/:tag" component={EntriesByTag} />
            <Route path="page" component={Page} />
            <Route path="page/:name" component={PageByName} />
        </Route>
    </Router>,
    document.getElementsByTagName('app')[0]
);
