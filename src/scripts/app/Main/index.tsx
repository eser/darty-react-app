import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { services } from '../utils/services';

import { PageModel } from './models/PageModel';

import { Layout } from './Layout';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { EntriesByProperty } from './components/EntriesByProperty';
import { EntriesByTag } from './components/EntriesByTag';
import { Pages } from './components/Pages';
import { PageByName } from './components/PageByName';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="properties/:property/:value" component={EntriesByProperty} />
        <Route path="tags/:tag" component={EntriesByTag} />
        <Route path="pages" component={Pages} />
        <Route path="pages/:name" component={PageByName} />
        <Route path="*" component={NotFound} status={404} />
    </Route>
);

export const main = {
    routes: routes,
    navigationItems: {
        page: {
            resolver: (url: string) => {
                if (url.substring(0, 8) != '#/pages/') {
                    return null;
                }

                return {
                    page: decodeURIComponent(url.substring(8))
                };
            },
            builder: (parameters: { page: string }) => {
                return `/pages/${encodeURIComponent(parameters.page)}`
            },
            prefetcher: (parameters: { page: string }) => {
                const model = services.get(PageModel);

                model.getPageByName(parameters.page);
            }
        }
    }
};
