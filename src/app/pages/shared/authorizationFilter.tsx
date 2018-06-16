import * as React from 'react';
import { Redirect } from 'react-router-dom';

import appContext from '../../appContext';

interface AuthorizationFilterProps {
}

interface AuthorizationFilterState {
}

class AuthorizationFilter extends React.Component<AuthorizationFilterProps, AuthorizationFilterState> {
    constructor(props: AuthorizationFilterProps, context: any) {
        super(props, context);

        this.state = {
            isReady: false,
        };
    }

    render(): JSX.Element {
        // const sessionManager = appContext.get('sessionManager');

        // if (!sessionManager.state.logged) {
        //     return (
        //         <Redirect to="/login" />
        //     );
        // }

        // TODO remove React.Children.only after we upgraded React to 16.x
        //      since it supports rendering/returning multiple elements
        return React.Children.only(this.props.children);
    }
}

export {
    AuthorizationFilter as default,
};
