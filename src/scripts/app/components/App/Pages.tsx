import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

import { PageList } from './common/PageList.tsx';

export class Pages extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = new AppModel();
        this.updateDatasource();
    }

    public componentWillReceiveProps(nextProps: any) {
        this.updateDatasource();
    }

    public render() {
        if (this.state.error) {
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
                Pages

                <PageList datasource={this.state.datasource} datakey="pages" />
            </div>
        );
    }

    private updateDatasource() {
        this.model.getPages()
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ error: true }); });
    }

}