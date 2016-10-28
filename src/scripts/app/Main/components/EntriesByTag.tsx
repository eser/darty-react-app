import * as React from 'react';

import { app } from '../../';

import { PageModel } from '../models/PageModel';
import { LinearTimeline } from '../controls/LinearTimeline';

export class EntriesByTag extends React.Component<any, any> {

    state: any;
    model: PageModel;

    constructor(props: any) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = app.services.get(PageModel);
        this.updateDatasource(this.props.params.tag);
    }

    componentWillReceiveProps(nextProps: any): void {
        this.updateDatasource(nextProps.params.tag);
    }

    render(): any {
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
                <h1>Entries By Tag: {this.props.params.tag}</h1>

                <LinearTimeline datasource={this.state.datasource} datakey="entries" />
            </div>
        );
    }

    updateDatasource(tag: string): void {
        this.model.getEntriesByTag(tag)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ error: err }); });
    }

}

export default EntriesByTag;
