import * as React from 'react';

import appContext from '../../appContext';

import LinearTimelineView from './linearTimelineView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

interface EntriesByTagContainerPropsInterface {
    tag: string;
}

interface EntriesByTagContainerStateInterface {
    isCompleted: boolean;
    datasource: any;
    error: string | false;
}

class EntriesByTagContainer extends React.Component<EntriesByTagContainerPropsInterface, EntriesByTagContainerStateInterface> {
    constructor(props: EntriesByTagContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            isCompleted: false,
            datasource: null,
            error: false,
        };
    }

    componentDidMount(): void {
        if (!this.state.isCompleted) {
            this.updateDatasource(this.props.tag);
        }
    }

    componentDidUpdate(prevProps: EntriesByTagContainerPropsInterface, prevState: EntriesByTagContainerStateInterface): void {
        if (this.props.tag !== prevProps.tag) {
            this.componentDidMount();
        }
    }

    render(): JSX.Element {
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
                <h1>Entries By Tag: {this.props.tag}</h1>

                <LinearTimelineView datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    async updateDatasource(tag: string): Promise<void> {
        const pageService = appContext.get('pageService');

        try {
            const response = await pageService.getEntriesByTag(tag);

            this.setState({ isCompleted: true, datasource: response, error: false });
        }
        catch (err) {
            this.setState({ isCompleted: true, datasource: null, error: err });
        }
    }
}

export {
    EntriesByTagContainer as default,
    EntriesByTagContainerPropsInterface,
    EntriesByTagContainerStateInterface,
};
