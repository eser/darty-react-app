declare var global: any;

import * as React from 'react';
import { Link } from 'react-router';

import * as Constants from '../Constants.ts';

export class App extends React.Component<any, any> {

    public state: any;

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

        if (global.app === undefined) {
            global.app = this;
        }
    }

    public getChildContext() {
        return {
            session: this.state.session
        };
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

                {this.props.children}
            </div>
        );
    }

}
