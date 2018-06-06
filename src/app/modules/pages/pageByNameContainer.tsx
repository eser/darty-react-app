import * as React from 'react';
import * as PropTypes from 'prop-types';

import appContext from '../../appContext';

import PageContentView from './pageContentView';
import LinearTimelineView from './linearTimelineView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

interface PageByNameContainerPropsInterface {
    name: string;
}

interface PageByNameContainerStateInterface {
    datasource: any;
    error: string | false;
}

class PageByNameContainer extends React.Component<PageByNameContainerPropsInterface, PageByNameContainerStateInterface> {
    constructor(props: PageByNameContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            datasource: null,
            error: false,
        };
    }

    componentWillMount(): void {
        this.updateDatasource(this.props.name);
    }

    componentWillReceiveProps(nextProps: PageByNameContainerPropsInterface): void {
        this.updateDatasource(nextProps.name);
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

        const isEditable = false; // (this.props.store.login.userLevel >= constants.UserLevels.Editor);

        return (
            <div>
                <h1>Page: {this.props.name}</h1>

                <PageContentView datasource={this.state.datasource} datakey="page" />

                <h2>History:</h2>

                <LinearTimelineView datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    updateDatasource(name: string): void {
        const pageService = appContext.get('pageService');

        pageService.getPageByName(name)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }
}

export {
    PageByNameContainer as default,
    PageByNameContainerPropsInterface,
    PageByNameContainerStateInterface,
};
