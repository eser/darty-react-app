import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import customHistory from './History';

import { NavigationManager } from './NavigationManager';

import { MainRoutes } from './Main/';

export class App {

    public init() {
        NavigationManager.prefetchUrl();
        this.render();
    }

    private render() {
        ReactDOM.render(
            <Router history={customHistory}>
                {MainRoutes}
            </Router>,
            document.getElementsByTagName('app')[0]
        );
    }

}

export const app = new App();
