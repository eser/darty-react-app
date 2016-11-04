import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { app, App, AppModuleInterface } from '../';
import { NavigationItemInterface } from '../utils/NavigationManager';

import { PageModel } from './models/PageModel';

import { Layout } from './Layout';
import { NotFound } from './components/smart/NotFound';
import { Home } from './components/smart/Home';
import { EntriesByProperty } from './components/smart/EntriesByProperty';
import { EntriesByTag } from './components/smart/EntriesByTag';
import { Pages } from './components/smart/Pages';
import { PageByName } from './components/smart/PageByName';

export interface PageInterface {
    page: string;
}

export class Main implements AppModuleInterface {

    get root(): any {
        return Layout.instance;
    }

    getRoutes(): any {
        return [
            (
                <Route key="route-main" path="/" component={Layout}>
                    <IndexRoute key="route-main-index" component={Home} />
                    <Route key="route-main-properties-property-value" path="properties/:property/:value" component={EntriesByProperty} />
                    <Route key="route-main-tags-tag" path="tags/:tag" component={EntriesByTag} />
                    <Route key="route-main-pages" path="pages" component={Pages} />
                    <Route key="route-main-pages-name" path="pages/:name" component={PageByName} />
                    <Route key="route-main-catch-all" path="*" component={NotFound} status={404} />
                </Route>
            )
        ];
    }

    getNavigationItems(): Map<string, NavigationItemInterface> {
        return new Map<string, NavigationItemInterface>([
            [
                'page',
                {
                    resolver: (url: string): PageInterface | null => {
                        if (url.substring(0, 8) !== '#/pages/') {
                            return null;
                        }

                        return {
                            page: decodeURIComponent(url.substring(8))
                        };
                    },
                    builder: (parameters: PageInterface): string => {
                        return `/pages/${encodeURIComponent(parameters.page)}`
                    },
                    prefetcher: (parameters: PageInterface): void => {
                        const model: PageModel = app.services.get(PageModel);

                        model.getPageByName(parameters.page);
                    }
                }
            ]
        ]);
    }

}

export default Main;
