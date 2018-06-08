declare var global: any;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Route, StaticRouter, Switch } from 'react-router-dom';

interface AppStackContainerProps {
    appStack: AppStack;
}

interface AppStackContainerState {
}

class AppStackContainer extends React.Component<AppStackContainerProps, AppStackContainerState> {
    render(): JSX.Element {
        let renderIndex = 0;

        return (
            <Switch key="appStack-switch">
                {Object.keys(this.props.appStack.appClasses).map((itemKey) =>
                    <Route path={itemKey} component={this.props.appStack.appClasses[itemKey]} key={`appStack-switch-app-${renderIndex++}`} />
                )}
            </Switch>
        );
    }
}

class AppStack {
    router: any;
    appClasses: { [key: string]: any };

    constructor(router, appClasses) {
        this.router = router;
        this.appClasses = appClasses;
    }

    renderToDOM(targetElement): void {
        ReactDOM.render(
            React.createElement(
                this.router.component,
                this.router.props,
                <AppStackContainer appStack={this} />,
            ),
            targetElement,
        );
    }

    renderToString(path): string {
        const context = {};

        return ReactDOMServer.renderToString(
            <StaticRouter location={path} context={context}>
                <AppStackContainer appStack={this} />
            </StaticRouter>
        );
    }
}

class AppStackBuilder {
    router: { component: any, props: any } | null;
    appClasses: { [key: string]: any };

    constructor() {
        this.router = null;
        this.appClasses = {};
    }

    useRouter(component, props = null): AppStackBuilder {
        this.router = { component: component, props: props };

        return this;
    }

    add(path, appClass): AppStackBuilder {
        this.appClasses[path] = appClass;

        return this;
    }

    build(): AppStack {
        return new AppStack(this.router, this.appClasses);
    }
}

export {
    AppStack as default,
    AppStackBuilder,
    AppStackContainer,
};
