import React from 'react';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import appStore from './appStore';

import Layout from './layouts/default/layout';
import Home from './pages/home/home';
import Dummy from './pages/dummy/dummy';
import NotFound from './pages/notFound/notFound';

function App() {
    const initialState = {};

    return (
        <Provider store={appStore(initialState)}>
            <Switch>
                <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

                <Route path="/dummy/" exact={true} strict={true} render={() => <Layout><Dummy /></Layout>} />

                <Route render={() => <NotFound />} />
            </Switch>
        </Provider>
    );
}

export {
    App as default,
};
