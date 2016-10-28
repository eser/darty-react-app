import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { ServiceContainer } from './utils/ServiceContainer';
import { NavigationItem, NavigationManager } from './utils/NavigationManager';
import { history } from './history';

export interface AppModule {

    getRoutes(): void;
    getNavigationItems(): Map<string, NavigationItem>;

}

export class App {

    services: ServiceContainer;
    navigationManager: NavigationManager;
    history: any;

    appModules: Array<AppModule>;

    constructor() {
        this.services = new ServiceContainer();
        this.navigationManager = new NavigationManager();
        this.history = history;

        this.appModules = new Array<AppModule>();
    }

    addModule(appModuleType): void {
        const appModule: AppModule = new appModuleType(this);

        this.appModules.push(appModule);
    }

    init(): void {
        for (const appModule of this.appModules) {
            this.navigationManager.addRange(appModule.getNavigationItems());
        }

        this.navigationManager.prefetchUrl(location.hash);
    }

    render(targetElement: Element): void {
        ReactDOM.render(
            <Router history={this.history}>
                {this.appModules.map((appModule) => appModule.getRoutes())}
            </Router>,
            targetElement
        );
    }

}

export const app = new App();

export default app;
