import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthorizationFilter from './pages/shared/authorizationFilter';

import LayoutContainer from './layouts/default/layoutContainer';
import HomeContainer from './pages/home/homeContainer';
import DummyContainer from './pages/dummy/dummyContainer';
import NotFoundContainer from './pages/notFound/notFoundContainer';

// stylesheets
import './assets/styles.scss';
import './assets/fonts.scss';

interface AppContainerProps {
}

interface AppContainerState {
    initialized: boolean;
}

class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
    constructor(props: AppContainerProps, context: any) {
        super(props, context);

        this.state = {
            initialized: false,
        };
    }

    async init(): Promise<void> {
        if (this.state.initialized) {
            return;
        }

        this.setState({
            initialized: true,
        });

        // this.events.emit('appInit');
    }

    componentDidMount(): void {
        this.init();
    }

    render(): JSX.Element {
        return (
            <Switch>
                <Route path="/" exact={true} strict={true} render={() => <LayoutContainer><HomeContainer /></LayoutContainer>} />

                <Route path="/dummy/" exact={true} strict={true} render={() => <LayoutContainer><DummyContainer /></LayoutContainer>} />

                {/* <Route path="/login" exact={true} strict={true} render={() => <LoginContainer />} />
                <Route path="/settings" exact={true} strict={true} render={() => <AuthorizationFilter><LayoutContainer><SettingsContainer /></LayoutContainer></AuthorizationFilter>} /> */}

                <Route render={() => <NotFoundContainer />} />
            </Switch>
        );
    }
}

export {
    AppContainer as default,
};
