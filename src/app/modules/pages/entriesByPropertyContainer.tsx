import * as React from 'react';
import * as PropTypes from 'prop-types';

import appContext from '../../appContext';

import LinearTimelineView from './linearTimelineView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

interface EntriesByPropertyContainerPropsInterface {
    property: string;
    value: string;
}

interface EntriesByPropertyContainerStateInterface {
    datasource: any;
    error: string | false;
}

class EntriesByPropertyContainer extends React.Component<EntriesByPropertyContainerPropsInterface, EntriesByPropertyContainerStateInterface> {
    constructor(props: EntriesByPropertyContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            datasource: null,
            error: false,
        };
    }

    componentWillMount(): void {
        this.updateDatasource(this.props.property, this.props.value);
    }

    componentWillReceiveProps(nextProps: EntriesByPropertyContainerPropsInterface): void {
        this.updateDatasource(nextProps.property, nextProps.value);
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
                <h1>Entries By Property: {this.props.property}={this.props.value}</h1>

                <LinearTimelineView datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    updateDatasource(property: string, value: string): void {
        const pageService = appContext.get('pageService');

        pageService.getEntriesByProperty(property, value)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }
}

export {
    EntriesByPropertyContainer as default,
    EntriesByPropertyContainerPropsInterface,
    EntriesByPropertyContainerStateInterface,
};
