import * as React from 'react';

import AppStackContainer from './appStackContainer';

class AppStack {
    appClasses: { [key: string]: any };

    constructor(appClasses: { [key: string]: any } = []) {
        this.appClasses = appClasses;
    }

    add(path: string, appClass: any): AppStack {
        this.appClasses[path] = appClass;

        return this;
    }

    addRange(appClasses: { [key: string]: any }): AppStack {
        for (const path in appClasses) {
            this.appClasses[path] = appClasses[path];
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
