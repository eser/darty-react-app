declare var global: any;

import * as React from 'react';
import { Link, hashHistory } from 'react-router';

import { AppModel } from '../models/AppModel.ts';

import * as Constants from '../Constants.ts';

export class App extends React.Component<any, any> {

    state: any;
    model: AppModel;

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

        this.model = new AppModel();

        if (global.app === undefined) {
            global.app = this;
        }
    }

    public getChildContext() {
        return {
            session: this.state.session
        };
    }

    public navigateToPage(name: string) {
        this.model.getPageByName(name);
        hashHistory.push(`/pages/${encodeURIComponent(name)}`);
    }

    public clickHandler(ev) {
        const target = ev.target;

        if (target.tagName === 'A') {
            const linkUrl = target.getAttribute('href');

            if (linkUrl.substring(0, 8) == '#/pages/') {
                const pagename = decodeURIComponent(linkUrl.substring(8));

                this.navigateToPage(pagename);

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
                <header className="header">
                    <h1>ts-spa-boilerplate</h1>
                </header>

                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/pages" activeClassName="active">Pages</Link></li>
                </ul>

                <hr />

                <div onClick={this.clickHandler.bind(this)}>
                    {this.props.children}
                </div>
            </div>
        );
    }

}
