import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match } from 'react-router';

import { ServiceContainer } from './utils/ServiceContainer';
import { NavigationItemInterface, NavigationManager } from './utils/NavigationManager';
import { camelize } from './utils/camelize';
import { history, HistoryType } from './history';

export interface AppModuleInterface {

    readonly root: any;

    getRoutes(): any;
    getNavigationItems(): Map<string, NavigationItemInterface>;

}

export enum RenderResultType {
    Success,
    Redirect,
    NotFound
};

export interface RenderResult {

    type: RenderResultType;
    location: string;
    error: any;
    content: string;

}

export class App {

    services: ServiceContainer;
    navigationManager: NavigationManager;
    history: any;

    modules: { [key: string]: AppModuleInterface };

    routerRenderCount: number;

    constructor() {
        this.services = new ServiceContainer();
        this.navigationManager = new NavigationManager();
        this.history = history.create(HistoryType.Browser);

        this.modules = {};

        this.routerRenderCount = 0;
    }

    addModule(appModuleType): void {
        const appModule: AppModuleInterface = new appModuleType(); // this?

        this.modules[camelize(appModuleType.name)] = appModule;
    }

    init(): void {
        for (const moduleKey of Object.keys(this.modules)) {
            const module = this.modules[moduleKey];

            this.navigationManager.addRange(module.getNavigationItems());
        }

        this.navigationManager.prefetchUrl(location.hash);
    }

    *getRoutes(): any {
        for (const moduleKey of Object.keys(this.modules)) {
            const module = this.modules[moduleKey];

            for (const moduleRoute of module.getRoutes()) {
                yield moduleRoute;
            }
        }
    }

    compile(): any {
        return (
            <Router key={this.routerRenderCount++} history={this.history}>
                {[...this.getRoutes()]}
            </Router>
        );
    }

    renderToDOM(targetElement: Element): void {
        ReactDOM.render(
            this.compile(),
            targetElement
        );
    }

    renderToString(url: string): Promise<RenderResult> {
        return new Promise((resolve, reject) => {
            match(
                {
                    routes: this.compile(),
                    location: this.history.createLocation(url)
                },
                (err, redirectLocation, renderProps) => {
                    if (err) {
                        reject(err);

                        return;
                    }

                    if (redirectLocation) {
                        resolve({
                            type: RenderResultType.Redirect,
                            location: redirectLocation.pathname + redirectLocation.search
                        });

                        return;
                    }

                    if (renderProps === null) {
                        resolve({
                            type: RenderResultType.NotFound
                        });

                        return;
                    }

                    const content = ReactDOMServer.renderToString(
                        <RouterContext {...renderProps} />
                    );

                    resolve({
                        type: RenderResultType.Success,
                        content: content
                    });
                }
            );
        });
    }

}

export const app = new App();

export default app;
