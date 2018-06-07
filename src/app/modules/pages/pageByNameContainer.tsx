import * as React from 'react';

import appContext from '../../appContext';

import PageContentView from './pageContentView';
import LinearTimelineView from './linearTimelineView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

interface PageByNameContainerPropsInterface {
    name: string;
}

interface PageByNameContainerStateInterface {
    isCompleted: boolean;
    name: string;
    datasource: any;
    error: string | false;
}

class PageByNameContainer extends React.Component<PageByNameContainerPropsInterface, PageByNameContainerStateInterface> {
    static getDerivedStateFromProps(nextProps: PageByNameContainerPropsInterface, prevState: PageByNameContainerStateInterface) {
        if (nextProps.name !== prevState.name) {
            return {
                isCompleted: false,
                name: nextProps.name,
            };
        }

        return null;
    }

    constructor(props: PageByNameContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            isCompleted: false,
            name: props.name,
            datasource: null,
            error: false,
        };
    }

    componentDidMount(): void {
        if (!this.state.isCompleted) {
            this.updateDatasource(this.state.name);
        }
    }

    componentDidUpdate(prevProps: PageByNameContainerPropsInterface, prevState: PageByNameContainerStateInterface): void {
        this.componentDidMount();
    }

    render(): JSX.Element {
        if (this.state.error !== false) {
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
                <h1>Page: {this.state.name}</h1>

                <PageContentView datasource={this.state.datasource} datakey="page" />

                <h2>History:</h2>

                <LinearTimelineView datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    async updateDatasource(name: string): Promise<void> {
        const pageService = appContext.get('pageService');

        try {
            const response = await pageService.getPageByName(name);

            this.setState({ isCompleted: true, datasource: response, error: false });
        }
        catch (err) {
            console.error(err);

            this.setState({ isCompleted: true, datasource: null, error: err });
        }
    }
}

export {
    PageByNameContainer as default,
    PageByNameContainerPropsInterface,
    PageByNameContainerStateInterface,
};
