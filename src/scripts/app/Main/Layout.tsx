declare var global: any;

import * as React from 'react';
import { IndexLink, Link } from 'react-router';

import { app } from '../';
import { NavigationResult } from '../utils/NavigationManager';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/';

import * as constants from '../constants';

export class Layout extends React.Component<any, any> {

    store: any;
    state: any;

    static childContextTypes: { [key: string]: any } = {
        session: React.PropTypes.object.isRequired
    };

    constructor(props: any) {
        super(props);

        this.store = createStore(reducer);

        this.state = {
            session: {
                userLevel: constants.USER_LEVEL_VISITOR
            }
        };
    }

    getChildContext(): { [key: string]: any } {
        return {
            session: this.state.session
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
