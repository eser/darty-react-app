import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

export class EntriesByTag extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                Entries By Tag: {this.props.params.tag}
            </div>
        );
    }

}
