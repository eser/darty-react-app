import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/index';
import Home from './pages/home/index';
import Dummy from './pages/dummy/index';
import NotFound from './pages/notFound/index';

function App() {
    return (
        <Switch>
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            <Route path="/dummy/" exact={true} strict={true} render={() => <Layout><Dummy /></Layout>} />

            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export {
    App as default,
};
