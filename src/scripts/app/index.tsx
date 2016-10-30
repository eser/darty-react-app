import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';

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

    render(targetElement: Element): void {
        ReactDOM.render(
            <Router history={this.history}>
                {Object.keys(this.modules).map((moduleKey) => this.modules[moduleKey].getRoutes())}
            </Router>,
            targetElement
        );
    }

}

export const app = new App();

export default app;
