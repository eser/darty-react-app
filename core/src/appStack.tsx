import * as React from 'react';

import AppStackContainer from './appStackContainer';

class AppStack {
    definitions: { [key: string]: any };

    constructor(definitions: { [key: string]: any } = []) {
        this.definitions = definitions;
    }

    add(path: string, app: any, store: any, state: any): AppStack {
        this.definitions[path] = { app: app, store: store, state: state };

        return this;
    }

    addRange(definitions: { [key: string]: { app: any, store: any, state: any } }): AppStack {
        for (const path in definitions) {
            this.definitions[path] = definitions[path];
        }

        return this;
    }

    wrapWith(wrapper: (children: React.ReactFragment) => JSX.Element): JSX.Element {
        return wrapper(this.render());
    }

    render(): JSX.Element {
        return (
            <AppStackContainer appStack={this} />
        );
    }
}

export {
    AppStack as default,
};
