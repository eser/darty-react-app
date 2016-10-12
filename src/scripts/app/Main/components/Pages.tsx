import * as React from 'react';

import { services } from '../../utils/services';

import { PageModel } from '../models/PageModel';
import { PageList } from '../controls/PageList';

export class Pages extends React.Component<any, any> {

    state: any;
    model: PageModel;

    constructor(props: any) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = services.get(PageModel);
        this.updateDatasource();
    }

    public componentWillReceiveProps(nextProps: any) {
        this.updateDatasource();
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
                <h1>Pages</h1>

                <PageList datasource={this.state.datasource} datakey="pages" />
            </div>
        );
    }

    private updateDatasource() {
        this.model.getPages()
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ error: err }); });
    }

}
