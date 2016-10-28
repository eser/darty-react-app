import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import { app, App, AppModule } from '../';
import { NavigationItem } from '../utils/NavigationManager';

import { PageModel } from './models/PageModel';

import { Layout } from './Layout';
import { NotFound } from './components/NotFound';
import { Home } from './components/Home';
import { EntriesByProperty } from './components/EntriesByProperty';
import { EntriesByTag } from './components/EntriesByTag';
import { Pages } from './components/Pages';
import { PageByName } from './components/PageByName';

export interface Page {
    page: string;
}

export class Main implements AppModule {

    owner: App;

    constructor(owner: App) {
        this.owner = owner;
    }

    getRoutes(): any {
        return (
            <Route path="/" component={Layout}>
                <IndexRoute component={Home} />
                <Route path="properties/:property/:value" component={EntriesByProperty} />
                <Route path="tags/:tag" component={EntriesByTag} />
                <Route path="pages" component={Pages} />
                <Route path="pages/:name" component={PageByName} />
                <Route path="*" component={NotFound} status={404} />
            </Route>
        );
    }

    getNavigationItems(): Map<string, NavigationItem> {
        return new Map<string, NavigationItem>([
            [
                'page',
                {
                    resolver: (url: string): Page | null => {
                        if (url.substring(0, 8) != '#/pages/') {
                            return null;
                        }

                        return {
                            page: decodeURIComponent(url.substring(8))
                        };
                    },
                    builder: (parameters: Page): string => {
                        return `/pages/${encodeURIComponent(parameters.page)}`
                    },
                    prefetcher: (parameters: Page): void => {
                        const model: PageModel = app.services.get(PageModel);

                        model.getPageByName(parameters.page);
                    }
                }
            ]
        ]);
    }

}

export default Main;
