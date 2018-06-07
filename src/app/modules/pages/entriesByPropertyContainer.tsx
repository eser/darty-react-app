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
    property: string;
    value: string;
    datasource: any;
    error: string | false;
}

class EntriesByPropertyContainer extends React.Component<EntriesByPropertyContainerPropsInterface, EntriesByPropertyContainerStateInterface> {
    static getDerivedStateFromProps(nextProps: EntriesByPropertyContainerPropsInterface, prevState: EntriesByPropertyContainerStateInterface) {
        if (nextProps.property !== prevState.property || nextProps.value !== prevState.value) {
            return {
                isCompleted: false,
                property: nextProps.property,
                value: nextProps.value,
            };
        }

        return null;
    }

    constructor(props: EntriesByPropertyContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            isCompleted: false,
            property: props.property,
            value: props.value,
            datasource: null,
            error: false,
        };
    }

    componentDidMount(): void {
        if (!this.state.isCompleted) {
            this.updateDatasource(this.state.property, this.state.value);
        }
    }

    componentDidUpdate(prevProps: EntriesByPropertyContainerPropsInterface, prevState: EntriesByPropertyContainerStateInterface): void {
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
                <h1>Entries By Property: {this.state.property}={this.state.value}</h1>

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
            console.error(err);

            this.setState({ isCompleted: true, datasource: null, error: err });
        }
    }
}

export {
    EntriesByPropertyContainer as default,
    EntriesByPropertyContainerPropsInterface,
    EntriesByPropertyContainerStateInterface,
};
