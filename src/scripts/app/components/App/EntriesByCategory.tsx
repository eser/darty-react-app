import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

export class EntriesByCategory extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            timeline: 'loading...'
        };

        this.model = new AppModel();
        this.model.getEntriesByCategory(this.props.params.key, this.props.params.value)
            .then((response) => { this.state.timeline = response; });
    }

    public render() {
        return (
            <div>
                Entries By Category: {this.props.params.key}={this.props.params.value}

                {this.state.timeline}
            </div>
        );
    }

}
