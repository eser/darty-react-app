import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';

import { ServiceContainer } from './utils/ServiceContainer';
import { NavigationItemInterface, NavigationManager } from './utils/NavigationManager';
import { history } from './history';

export interface AppModuleInterface {

    getRoutes(): void;
    getNavigationItems(): Map<string, NavigationItemInterface>;

}

export class App {

    services: ServiceContainer;
    navigationManager: NavigationManager;
    history: any;

    appModules: Array<AppModuleInterface>;

    constructor() {
        this.services = new ServiceContainer();
        this.navigationManager = new NavigationManager();
        this.history = history;

        this.appModules = new Array<AppModuleInterface>();
    }

    addModule(appModuleType): void {
        const appModule: AppModuleInterface = new appModuleType(this);

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
