import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import appContext from './appContext';

import AuthorizationFilter from './modules/shared/authorizationFilter';

import LayoutContainer from './layouts/default/layoutContainer';
import HomeContainer from './modules/home/homeContainer';
import PageByNameContainer from './modules/pages/pageByNameContainer';
import EntriesByPropertyContainer from './modules/pages/entriesByPropertyContainer';
import EntriesByTagContainer from './modules/pages/entriesByTagContainer';
import PagesContainer from './modules/pages/pagesContainer';
import NotFoundContainer from './modules/notFound/notFoundContainer';

import LoadingView from './modules/shared/loadingView';

interface AppContainerPropsInterface {
}

interface AppContainerStateInterface {
    initialized: boolean;
}

class AppContainer extends React.Component<AppContainerPropsInterface, AppContainerStateInterface> {
    constructor(props: AppContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            initialized: false,
        };
    }

    async init() {
        if (this.state.initialized) {
            return;
        }

        const sessionService = appContext.get('sessionService');

        await sessionService.init();

        this.setState({
            initialized: true,
        });

        // this.events.emit('appInit');
    }

    async logout() {
        const sessionService = appContext.get('sessionService');

        await sessionService.logout();

        this.context.router.history.push('/login');
    }

    componentWillMount() {
        this.init();
    }

    render() {
        if (this.state === null || !this.state.initialized) {
            return (
                <LoadingView />
            );
        }

        return (
            <Switch>
                <Route path="/" exact={true} strict={true} render={() => <LayoutContainer><HomeContainer /></LayoutContainer>} />

                <Route path="/properties/:property/:value" exact={true} strict={true} render={(props) => <LayoutContainer><EntriesByPropertyContainer property={props.match.params.property} value={props.match.params.value} /></LayoutContainer>} />
                <Route path="/tags/:tag" exact={true} strict={true} render={(props) => <LayoutContainer><EntriesByTagContainer tag={props.match.params.tag} /></LayoutContainer>} />

                <Route path="/pages/:name/" exact={true} strict={true} render={(props) => <LayoutContainer><PageByNameContainer name={props.match.params.name} /></LayoutContainer>} />
                <Route path="/pages/" exact={true} strict={true} render={() => <LayoutContainer><PagesContainer /></LayoutContainer>} />

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
