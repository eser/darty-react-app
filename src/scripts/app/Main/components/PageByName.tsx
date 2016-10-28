import * as React from 'react';

import { app } from '../../';

import { PageModel } from '../models/PageModel';
import { PageContent } from '../controls/PageContent';
import { LinearTimeline } from '../controls/LinearTimeline';

export class PageByName extends React.Component<any, any> {

    state: any;
    model: PageModel;

    constructor(props: any) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = app.services.get(PageModel);
        this.updateDatasource(this.props.params.name);
    }

    componentWillReceiveProps(nextProps: any): void {
        this.updateDatasource(nextProps.params.name);
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
                <h1>Page: {this.props.params.name}</h1>

                <PageContent datasource={this.state.datasource} datakey="page" />

                <h2>History:</h2>

                <LinearTimeline datasource={this.state.datasource} datakey="entries" />
            </div>
        );
    }

    updateDatasource(name: string): void {
        this.model.getPageByName(name)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ error: err }); });
    }

}

export default PageByName;
