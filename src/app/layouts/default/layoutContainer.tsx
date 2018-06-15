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
            <div className="hero is-fullheight is-default">
                <header className="hero-head header">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <a className="navbar-item" href="https://github.com/eserozvataf/ts-spa-boilerplate">
                                    <i className="fa fa-code-fork fa-fw" aria-hidden="true"></i>
                                    ts-spa-boilerplate
                                </a>
                                <span className="navbar-burger burger" data-target="navbarMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-end">
                                    <div className="tabs is-right">
                                        <ul>
                                            <li><NavLink exact={true} to="/" activeClassName="is-active">Home</NavLink></li>
                                            <li><NavLink to="/pages/" activeClassName="is-active">Pages</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <main className="hero-body">
                    <div className="container content" onClick={this.clickHandler.bind(this)}>
                        {this.props.children}
                    </div>
                </main>
                <footer className="hero-foot">
                    <div className="container">
                        <div className="has-text-centered">
                            ts-spa-boilerplate
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export {
    LayoutContainer as default,
    LayoutContainerProps,
    LayoutContainerState,
};
