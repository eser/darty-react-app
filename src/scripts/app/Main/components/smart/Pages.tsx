import * as React from 'react';

import { app } from '../../../';

import { PageModel } from '../../models/PageModel';
import { PageList } from '../dumb/PageList';

export interface PagesPropsInterface {
    params: any;
}

export interface PagesStateInterface {
    datasource: any;
    error: any;
}

export class Pages extends React.Component<PagesPropsInterface, PagesStateInterface> {

    state: PagesStateInterface;
    model: PageModel;

    constructor(props: PagesPropsInterface) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = app.services.get(PageModel);
        this.updateDatasource();
    }

    componentWillReceiveProps(nextProps: PagesPropsInterface): void {
        this.updateDatasource();
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
                <h1>Pages</h1>

                <PageList datasource={this.state.datasource} datakey="pages" />
            </div>
        );
    }

    updateDatasource(): void {
        this.model.getPages()
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }

}

export default Pages;
