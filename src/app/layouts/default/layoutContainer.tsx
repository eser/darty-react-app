declare var global: any;

import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutContainerProps {
}

interface LayoutContainerState {
}

class LayoutContainer extends React.Component<LayoutContainerProps, LayoutContainerState> {
    constructor(props: LayoutContainerProps, context: any) {
        super(props, context);

        this.state = {};
    }

    clickHandler(ev): void {
        const target: Element = ev.target;

        if (target.tagName === 'A') {
            const url = target.getAttribute('href');

            if (url !== null) {
                // const navigationItem = app.navigationManager.identify(url);

                // if (navigationItem !== null) {
                //     app.history.push(navigationItem.getUrl());

                //     ev.preventDefault();
                // }
            }
        }
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    render(): JSX.Element {
        return (
            <div>
                <div className="header">
                    <ul className="inner">
                        <li><NavLink exact={true} to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/pages/" activeClassName="active">Pages</NavLink></li>
                        <li className="pull-right text-right">
                            <a href="https://github.com/eserozvataf/ts-spa-boilerplate">
                                <i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
                                ts-spa-boilerplate
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="content">
                    <div className="inner" onClick={this.clickHandler.bind(this)}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export {
    LayoutContainer as default,
    LayoutContainerProps,
    LayoutContainerState,
};
