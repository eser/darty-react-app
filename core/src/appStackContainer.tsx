import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

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
                {Object.keys(this.props.appStack.appClasses).map((itemKey) =>
                    <Route path={itemKey} component={this.props.appStack.appClasses[itemKey]} key={`appStack-switch-app-${renderIndex++}`} />
                )}
            </Switch>
        );
    }
}

export {
    AppStackContainer as default,
};
