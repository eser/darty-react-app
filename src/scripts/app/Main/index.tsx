import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Layout } from './Layout';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { EntriesByProperty } from './components/EntriesByProperty';
import { EntriesByTag } from './components/EntriesByTag';
import { Pages } from './components/Pages';
import { PageByName } from './components/PageByName';

export const MainRoutes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="properties/:property/:value" component={EntriesByProperty} />
        <Route path="tags/:tag" component={EntriesByTag} />
        <Route path="pages" component={Pages} />
        <Route path="pages/:name" component={PageByName} />
        <Route path="*" component={NotFound} status={404} />
    </Route>
);
