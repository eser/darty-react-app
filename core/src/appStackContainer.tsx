import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppStack from './appStack';

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
                {Object.keys(this.props.appStack.definitions).map((itemKey) => {
                    const definition = this.props.appStack.definitions[itemKey];
                    const component = <Route path={itemKey} component={definition.app} key={`appStack-switch-provider-app-${renderIndex++}`} />;

                    if (definition.store !== undefined) {
                        return (
                            <Provider store={definition.store(definition.state)} key={`appStack-switch-provider-${renderIndex++}`}>
                                {component}
                            </Provider>
                        );
                    }

                    return component;
                })}
            </Switch>
        );
    }
}

export {
    AppStackContainer as default,
};
