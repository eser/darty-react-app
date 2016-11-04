declare var global: any;

import * as React from 'react';
import { IndexLink, Link } from 'react-router';

import { app } from '../';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combinedReducers } from './flow/';

import * as constants from '../constants';

export interface LayoutPropsInterface {
    children: any;
}

export interface LayoutStateInterface {
}

export class Layout extends React.Component<LayoutPropsInterface, LayoutStateInterface> {

    static instance: Layout;

    store: any;
    state: LayoutStateInterface;

    constructor(props: LayoutPropsInterface) {
        super(props);

        const constructor_: any = this.constructor;
        if (constructor_.instance === undefined) {
            constructor_.instance = this;
        }

        const reduxDevtools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
        this.store = createStore(combinedReducers, reduxDevtools && reduxDevtools());
        this.state = {};
    }

    clickHandler(ev): void {
        const target: Element = ev.target;

        if (target.tagName === 'A') {
            const url = target.getAttribute('href');

            if (url !== null) {
                const navigationItem = app.navigationManager.identify(url);

                if (navigationItem !== null) {
                    app.history.push(navigationItem.getUrl());

                    ev.preventDefault();
                }
            }
        }
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    render(): any {
        return (
            <Provider store={this.store}>
                <div>
                    <div className="header">
                        <ul className="inner">
                            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                            <li><Link to="/pages" activeClassName="active">Pages</Link></li>
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
            </Provider>
        );
    }

}

export default Layout;
