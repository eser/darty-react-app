import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter, Router } from 'react-router';

import { createBrowserHistory } from 'history';

import AppContainer from './app/appContainer';

class Startup {
    vars: any;

    constructor(startupArgs: any) {
        const isBrowser = (startupArgs.platform === 'browser');

        this.vars = {
            ...startupArgs,
            history: isBrowser ? createBrowserHistory() : null,
        };
    }

    getRoot(): JSX.Element {
        return React.createElement(
            AppContainer,
            {}
        );
    }

    clientRender(targetElement: Element, isUpdate: boolean): void {
        const root = this.getRoot();

        const rootWithRouter = React.createElement(
            Router,
            {
                history: this.vars.history,
            },
            root
        );

        if (isUpdate) {
            ReactDOM.hydrate(rootWithRouter, targetElement);
        }
        else {
            ReactDOM.render(rootWithRouter, targetElement);
        }
    }

    serverRender(url: string): string {
        const context = {};

        const root = this.getRoot();

        const rootWithRouter = React.createElement(
            StaticRouter,
            {
                location: url,
                context: context,
            },
            root
        );

        const html = ReactDOMServer.renderToString(rootWithRouter);

        return html;
    }
}

export {
    Startup as default,
};
