import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

interface AuthorizationFilterPropsInterface {
}

interface AuthorizationFilterStateInterface {
}

class AuthorizationFilter extends React.Component<AuthorizationFilterPropsInterface, AuthorizationFilterStateInterface> {
    static contextTypes = {
        appContext: PropTypes.object,
    };

    constructor(props: AuthorizationFilterPropsInterface, context: any) {
        super(props, context);

        this.state = {
            isReady: false,
        };
    }

    render(): any {
        const sessionManager = this.context.appContext.get('sessionManager');

        if (!sessionManager.state.logged) {
            return (
                <Redirect to="/login" />
            );
        }

        // TODO remove React.Children.only after we upgraded React to 16.x
        //      since it supports rendering/returning multiple elements
        return React.Children.only(this.props.children);
    }
}

export {
    AuthorizationFilter,
};

export default AuthorizationFilter;
