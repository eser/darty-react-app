import * as React from 'react';

import appContext from '../../appContext';

import LinearTimelineView from './linearTimelineView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

interface EntriesByPropertyContainerPropsInterface {
    property: string;
    value: string;
}

interface EntriesByPropertyContainerStateInterface {
    isCompleted: boolean;
    datasource: any;
    error: string | false;
}

class EntriesByPropertyContainer extends React.Component<EntriesByPropertyContainerPropsInterface, EntriesByPropertyContainerStateInterface> {
    constructor(props: EntriesByPropertyContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            isCompleted: false,
            datasource: null,
            error: false,
        };
    }

    componentDidMount(): void {
        if (!this.state.isCompleted) {
            this.updateDatasource(this.props.property, this.props.value);
        }
    }

    componentDidUpdate(prevProps: EntriesByPropertyContainerPropsInterface, prevState: EntriesByPropertyContainerStateInterface): void {
        if (this.props.property !== prevProps.property || this.props.value !== prevProps.value) {
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
                <h1>Entries By Property: {this.props.property}={this.props.value}</h1>

                <LinearTimelineView datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    async updateDatasource(property: string, value: string): Promise<void> {
        const pageService = appContext.get('pageService');

        try {
            const response = await pageService.getEntriesByProperty(property, value);

            this.setState({ isCompleted: true, datasource: response, error: false });
        }
        catch (err) {
            this.setState({ isCompleted: true, datasource: null, error: err });
        }
    }
}

export {
    EntriesByPropertyContainer as default,
    EntriesByPropertyContainerPropsInterface,
    EntriesByPropertyContainerStateInterface,
};
