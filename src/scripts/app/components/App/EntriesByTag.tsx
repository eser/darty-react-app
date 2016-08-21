import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

import { TimelineOutput } from './common/TimelineOutput.tsx';

export class EntriesByTag extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            timeline: null
        };

        this.model = new AppModel();
        this.model.getEntriesByTag(this.props.params.tag)
            .then((response) => { this.setState({ timeline: response }); });
    }

    public render() {
        return (
            <div>
                Entries By Tag: {this.props.params.tag}

                <TimelineOutput input={this.state.timeline} />
            </div>
        );
    }

}
