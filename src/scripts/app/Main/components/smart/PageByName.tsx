import * as React from 'react';
import * as ReactRedux from 'react-redux';

import { app } from '../../../';

import { PageModel } from '../../models/PageModel';
import { PageContent } from '../dumb/PageContent';
import { LinearTimeline } from '../dumb/LinearTimeline';
import { Loading } from '../dumb/Loading';
import { Error } from '../dumb/Error';

import * as constants from '../../../constants';

export interface PageByNamePropsInterface {
    store: any;
    params: any;
}

export interface PageByNameStateInterface {
    datasource: any;
    error: any;
}

export class PageByName_ extends React.Component<PageByNamePropsInterface, PageByNameStateInterface> {

    state: PageByNameStateInterface;
    model: PageModel;

    constructor(props: PageByNamePropsInterface) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = app.services.get(PageModel);
        this.updateDatasource(this.props.params.name);
    }

    componentWillReceiveProps(nextProps: PageByNamePropsInterface): void {
        this.updateDatasource(nextProps.params.name);
    }

    render(): any {
        if (this.state.error) {
            console.error(this.state.error);

            return (
                <Error message="An error occurred" />
            );
        }

        if (this.state.datasource === null) {
            return (
                <Loading />
            );
        }

        const isEditable = (this.props.store.login.userLevel >= constants.UserLevels.Editor);

        return (
            <div>
                <h1>Page: {this.props.params.name}</h1>

                <PageContent datasource={this.state.datasource} datakey="page" />

                <h2>History:</h2>

                <LinearTimeline datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    updateDatasource(name: string): void {
        this.model.getPageByName(name)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }

}

export const PageByName = ReactRedux.connect
    ((state) => ({ store: state }))
    (PageByName_);

export default PageByName;
