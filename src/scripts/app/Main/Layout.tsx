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

    store: any;
    state: LayoutStateInterface;

    static childContextTypes: { [key: string]: any } = {
        store: React.PropTypes.object.isRequired
    };

    constructor(props: LayoutPropsInterface) {
        super(props);

        this.store = createStore(combinedReducers);
        global.store = this.store;
        this.state = {};
    }

    getChildContext(): { [key: string]: any } {
        return {
            store: this.store
        };
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
                            <li className="github">
                                <a href="https://github.com/eserozvataf/ts-spa-boilerplate">ts-spa-boilerplate</a>
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
