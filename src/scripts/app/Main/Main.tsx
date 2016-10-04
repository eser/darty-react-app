declare var global: any;

import * as React from 'react';
import { IndexLink, Link } from 'react-router';
import customHistory from '../History.ts';

import { PageModel } from './models/PageModel.ts';
import { PageTypes, Page, PageManager } from './utils/PageManager.ts';

import * as Constants from '../Constants.ts';

export class Main extends React.Component<any, any> {

    state: any;
    model: PageModel;

    static childContextTypes = {
        session: React.PropTypes.object.isRequired
    };

    constructor(props: any) {
        super(props);

        this.state = {
            session: {
                userLevel: Constants.USER_LEVEL_VISITOR
            }
        };

        this.model = new PageModel();

        if (global.app === undefined) {
            global.app = this;
        }
    }

    public getChildContext() {
        return {
            session: this.state.session
        };
    }

    public prefetchPage(page: Page) {
        if (page.type === PageTypes.Page) {
            this.model.getPageByName(page.parameters.page);
        }
    }

    public clickHandler(ev) {
        const target = ev.target;

        if (target.tagName === 'A') {
            const url = target.getAttribute('href'),
                page = PageManager.identify(url);

            if (page.type !== PageTypes.None) {
                this.prefetchPage(page);
                customHistory.push(PageManager.getUrl(page));

                ev.preventDefault();
            }
        }
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
        return (
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
        );
    }

}
