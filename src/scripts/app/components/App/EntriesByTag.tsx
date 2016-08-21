import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

import { LinearTimeline } from './common/LinearTimeline.tsx';

export class EntriesByTag extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            timeline: null
        };

        this.model = new AppModel();
        this.updateTimeline(this.props.params.tag);
    }

    public componentWillReceiveProps(nextProps: any) {
        this.updateTimeline(nextProps.params.tag);
    }

    public render() {
        return (
            <div>
                Entries By Tag: {this.props.params.tag}

                <LinearTimeline input={this.state.timeline} />
            </div>
        );
    }

    private updateTimeline(tag: string) {
        this.model.getEntriesByTag(tag)
            .then((response) => { this.setState({ timeline: response }); });
    }

}
