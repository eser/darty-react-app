declare var global: any;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactDOMServer from 'react-dom/server';
import { Route, StaticRouter, Switch } from 'react-router-dom';
import * as PropTypes from 'prop-types';

interface AppManagerContainerPropsInterface {
    appManager: AppManager;
}

interface AppManagerContainerStateInterface {
}

class AppManagerContainer extends React.Component<AppManagerContainerPropsInterface, AppManagerContainerStateInterface> {
    static childContextTypes = {
        appManager: PropTypes.object,
    };

    getChildContext(): { appManager: any } {
        return {
            appManager: this.props.appManager,
        };
    }

    render(): any {
        let renderIndex = 0;

        return (
            <Switch key="appManager-switch">
                {Object.keys(this.props.appManager.appClasses).map((itemKey) =>
                    <Route path={itemKey} component={this.props.appManager.appClasses[itemKey]} key={`appManager-switch-app-${renderIndex++}`} />
                )}
            </Switch>
        );
    }
}

class AppManager {
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
                <AppManagerContainer appManager={this} />,
            ),
            targetElement,
        );
    }

    renderToString(path): string {
        const context = {};

        return ReactDOMServer.renderToString(
            <StaticRouter location={path} context={context}>
                <AppManagerContainer appManager={this} />
            </StaticRouter>
        );
    }
}

class AppManagerBuilder {
    router: { component: any, props: any } | null;
    appClasses: { [key: string]: any };

    constructor() {
        this.router = null;
        this.appClasses = {};
    }

    useRouter(component, props = null): AppManagerBuilder {
        this.router = { component: component, props: props };

        return this;
    }

    add(path, appClass): AppManagerBuilder {
        this.appClasses[path] = appClass;

        return this;
    }

    build(): AppManager {
        return new AppManager(this.router, this.appClasses);
    }
}

export {
    AppManagerBuilder,
    AppManagerContainer,
    AppManager,
};

export default AppManagerBuilder;
