import * as React from 'react';
import * as PropTypes from 'prop-types';

import appContext from '../../appContext';

import PageListView from './pageListView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

interface PagesContainerPropsInterface {
}

interface PagesContainerStateInterface {
    datasource: any;
    error: string | false;
}

class PagesContainer extends React.Component<PagesContainerPropsInterface, PagesContainerStateInterface> {
    constructor(props: PagesContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            datasource: null,
            error: false,
        };
    }

    componentWillMount(): void {
        this.updateDatasource();
    }

    componentWillReceiveProps(nextProps: PagesContainerPropsInterface): void {
        this.updateDatasource();
    }

    render(): any {
        if (this.state.error !== false) {
            console.error(this.state.error);

            return (
                <ErrorView message="An error occurred" />
            );
        }

        if (this.state.datasource === null) {
            return (
                <LoadingView />
            );
        }

        return (
            <div>
                <h1>Pages</h1>

                <PageListView datasource={this.state.datasource} datakey="pages" />
            </div>
        );
    }

    updateDatasource(): void {
        const pageService = appContext.get('pageService');

        pageService.getPages()
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }

}

export {
    PagesContainer as default,
    PagesContainerPropsInterface,
    PagesContainerStateInterface,
};
