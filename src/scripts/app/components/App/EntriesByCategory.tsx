import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

import { TimelineOutput } from './common/TimelineOutput.tsx';

export class EntriesByCategory extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            timeline: null
        };

        this.model = new AppModel();
        this.model.getEntriesByCategory(this.props.params.key, this.props.params.value)
            .then((response) => { this.setState({ timeline: response }); });
    }

    public render() {
        return (
            <div>
                Entries By Category: {this.props.params.key}={this.props.params.value}

                <TimelineOutput input="{this.state.timeline}" />
            </div>
        );
    }

}
