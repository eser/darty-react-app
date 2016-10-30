import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Router, RouterContext, match } from 'react-router';

import { ServiceContainer } from './utils/ServiceContainer';
import { NavigationItemInterface, NavigationManager } from './utils/NavigationManager';
import { camelize } from './utils/camelize';
import { history } from './history';

export interface AppModuleInterface {

    readonly root: any;

    getRoutes(): void;
    getNavigationItems(): Map<string, NavigationItemInterface>;

}

export class App {

    services: ServiceContainer;
    navigationManager: NavigationManager;
    history: any;

    modules: { [key: string]: AppModuleInterface };

    constructor() {
        this.services = new ServiceContainer();
        this.navigationManager = new NavigationManager();
        this.history = history;

        this.modules = {};
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

    compile(): any {
        return (
            <Router history={this.history}>
                {Object.keys(this.modules).map((moduleKey) => this.modules[moduleKey].getRoutes())}
            </Router>
        );
    }

    renderToDOM(targetElement: Element): void {
        ReactDOM.render(
            this.compile(),
            targetElement
        );
    }

    renderToString(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            match(
                {
                    routes: this.compile(),
                    location: this.history.createLocation(url)
                },
                (err, redirect, props) => {
                    if (err) {
                        reject(err);

                        return;
                    }

                    const result = ReactDOMServer.renderToString(
                        <RouterContext {...props} />
                    );

                    resolve(result);
                }
            );
        });
    }

}

export const app = new App();

export default app;
