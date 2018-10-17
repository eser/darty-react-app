/* eslint-env node */

// react-dom
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

// execute startup
import AppStack from './appStack';
import appMapping from '../../src/startup';

// SSR rendering method
function ssrRenderer(appStack: AppStack, url, context = {}): string {
    const root = appStack.wrapWith(
        children =>
        // <StaticRouter location={req.originalUrl} context={context}>{children}</StaticRouter>
        React.createElement(
            StaticRouter,
            {
                location: url,
                context: context,
            },
            children
        )
    );

    const html = ReactDOMServer.renderToString(root);

    return html;
}

const appStack = new AppStack()
    .addRange(appMapping);

const serverObjects = {
    appStack,
    ssrRenderer,
};

export {
    serverObjects as default,
};
