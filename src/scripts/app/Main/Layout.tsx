declare var global: any;

import * as React from 'react';
import { IndexLink, Link } from 'react-router';
import customHistory from '../History';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/';

import { Services } from '../utils/Services';
import { PageTypes, Page, NavigationManager } from '../NavigationManager';
import * as Constants from '../Constants';

import { PageModel } from './models/PageModel';

export class Layout extends React.Component<any, any> {

    store: any;
    state: any;
    model: PageModel;

    static childContextTypes = {
        session: React.PropTypes.object.isRequired
    };

    constructor(props: any) {
        super(props);

        this.store = createStore(reducer);

        this.state = {
            session: {
                userLevel: Constants.USER_LEVEL_VISITOR
            }
        };

        this.model = Services.get(PageModel);
    }

    public getChildContext() {
        return {
            session: this.state.session
        };
    }

    public clickHandler(ev) {
        const target = ev.target;

        if (target.tagName === 'A') {
            const url = target.getAttribute('href'),
                page = NavigationManager.identify(url);

            if (page.type !== PageTypes.None) {
                // NavigationManager.prefetch(page);
                customHistory.push(NavigationManager.getUrl(page));

                ev.preventDefault();
            }
        }
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
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
