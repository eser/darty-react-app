import React from 'react';
import ReactDOMClient from 'react-dom/client';
import ReactDOMServer from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import App from './app/app';

class Startup {
    vars: any;

    constructor(startupArgs: any) {
        this.vars = startupArgs;
    }

    getRoot(): JSX.Element {
        return React.createElement(
            App,
            {},
        );
    }

    clientRender(targetElement: Element, isUpdate: boolean): void {
        const root = this.getRoot();

        const rootWithRouter = React.createElement(
            BrowserRouter,
            {
            },
            root,
        );

        if (isUpdate) {
            ReactDOMClient.hydrateRoot(targetElement, rootWithRouter);
        }
        else {
            const reactRoot = ReactDOMClient.createRoot(targetElement);
            reactRoot.render(rootWithRouter);
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
            root,
        );

        const html = ReactDOMServer.renderToString(rootWithRouter);

        return html;
    }
}

export {
    Startup as default,
};
