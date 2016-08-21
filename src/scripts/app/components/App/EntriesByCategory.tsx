import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

import { LinearTimeline } from './common/LinearTimeline.tsx';

export class EntriesByCategory extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            timeline: null
        };

        this.model = new AppModel();
        this.updateTimeline(this.props.params.key, this.props.params.value);
    }

    public componentWillReceiveProps(nextProps: any) {
        this.updateTimeline(nextProps.params.key, nextProps.params.value);
    }

    public render() {
        return (
            <div>
                Entries By Category: {this.props.params.key}={this.props.params.value}

                <LinearTimeline input={this.state.timeline} />
            </div>
        );
    }

    private updateTimeline(key: string, value: string) {
        this.model.getEntriesByCategory(key, value)
            .then((response) => { this.setState({ timeline: response }); });
    }

}
