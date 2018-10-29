import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import appStore from './appStore';

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
}

class AppContainer extends React.Component<AppContainerProps, AppContainerState> {
    constructor(props: AppContainerProps, context: any) {
        super(props, context);

        this.state = {
        };
    }

    render(): JSX.Element {
        const initialState = {};

        return (
            <Provider store={appStore(initialState)}>
                <Switch>
                    <Route path="/" exact={true} strict={true} render={() => <LayoutContainer><HomeContainer /></LayoutContainer>} />

                    <Route path="/dummy/" exact={true} strict={true} render={() => <LayoutContainer><DummyContainer /></LayoutContainer>} />

                    <Route render={() => <NotFoundContainer />} />
                </Switch>
            </Provider>
        );
    }
}

export {
    AppContainer as default,
};
