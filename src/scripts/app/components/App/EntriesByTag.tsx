import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';

import { LinearTimeline } from './common/LinearTimeline.tsx';

export class EntriesByTag extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = new AppModel();
        this.updateDatasource(this.props.params.tag);
    }

    public componentWillReceiveProps(nextProps: any) {
        this.updateDatasource(nextProps.params.tag);
    }

    public render() {
        if (this.state.error) {
            console.error(this.state.error);

            return (
                <div>An error occurred</div>
            );
        }

        if (this.state.datasource === null) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                Entries By Tag: {this.props.params.tag}

                <LinearTimeline datasource={this.state.datasource} datakey="entries" />
            </div>
        );
    }

    private updateDatasource(tag: string) {
        this.model.getEntriesByTag(tag)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ error: err }); });
    }

}
