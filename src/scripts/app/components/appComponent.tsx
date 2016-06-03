import * as React from 'react';

import { appPropsInterface } from '../entities/appPropsInterface';
import { appStateInterface } from '../entities/appStateInterface';
import * as constants from '../constants';

export class AppComponent extends React.Component<appPropsInterface, appStateInterface> {

    public state: appStateInterface;

    constructor(props: appPropsInterface) {
        super(props);

        this.state = {
            nowShowing: constants.APP_STATE_INITIAL
        };
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
        return (
            <div>
                <header className="header">
                    <h1>ts-spa-boilerplate: {this.state.nowShowing}</h1>
                </header>
            </div>
        );
    }

}
