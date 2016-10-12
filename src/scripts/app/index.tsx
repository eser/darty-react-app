import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { customHistory } from './History';

import { NavigationManager } from './utils/NavigationManager';

import { main } from './Main/';

export class App {

    navigationManager: NavigationManager;
    history: any;

    constructor() {
        this.navigationManager = new NavigationManager();
        this.history = customHistory;
    }

    public init() {
        this.navigationManager.addRange(main.navigationItems);
        this.navigationManager.prefetchUrl(location.hash);

        this.render();
    }

    private render() {
        ReactDOM.render(
            <Router history={this.history}>
                {main.routes}
            </Router>,
            document.getElementsByTagName('app')[0]
        );
    }

}

export const app = new App();
