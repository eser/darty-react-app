import * as React from 'react';

import { AppModel } from '../models/AppModel.ts';
import * as Constants from '../Constants.ts';

export interface AppPropsInterface extends React.Props<any> {
    model: AppModel
}

export interface AppStateInterface {
    nowShowing?: string
}

export class AppComponent extends React.Component<AppPropsInterface, AppStateInterface> {

    public state: AppStateInterface;

    constructor(props: AppPropsInterface) {
        super(props);

        this.state = {
            nowShowing: Constants.APP_STATE_INITIAL
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
