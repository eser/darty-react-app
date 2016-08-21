import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

export class Page extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help
    public render() {
        return (
            <div>
                Page: {this.props.params.page}
            </div>
        );
    }

}
