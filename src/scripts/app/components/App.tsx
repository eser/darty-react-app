import * as React from 'react';
import { Link } from 'react-router';

import { AppModel } from '../models/AppModel.ts';
import * as Constants from '../Constants.ts';

export class App extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);

        this.state = {
            caption: Constants.APP_STATE_INITIAL
        };
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
        return (
            <div>
                <header className="header">
                    <h1>ts-spa-boilerplate: {this.state.caption}</h1>
                </header>

                <ul>
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                    <li><Link to="/category/era/Ortacag" activeClassName="active">Entries By Category</Link></li>
                    <li><Link to="/tag/Purifiers" activeClassName="active">Entries By Tag</Link></li>
                    <li><Link to="/page/X-Factor" activeClassName="active">Page</Link></li>
                </ul>

                <hr />

                {this.props.children}
            </div>
        );
    }

}
