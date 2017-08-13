import * as React from 'react';
import * as PropTypes from 'prop-types';

import { LinearTimelineView } from './linearTimelineView';
import { LoadingView } from '../shared/loadingView';
import { ErrorView } from '../shared/errorView';

interface EntriesByTagContainerPropsInterface {
    tag: string;
}

interface EntriesByTagContainerStateInterface {
    datasource: any;
    error: string | false;
}

class EntriesByTagContainer extends React.Component<EntriesByTagContainerPropsInterface, EntriesByTagContainerStateInterface> {
    static contextTypes = {
        appContext: PropTypes.object,
    };

    constructor(props: EntriesByTagContainerPropsInterface, context: any) {
        super(props, context);

        this.state = {
            datasource: null,
            error: false,
        };
    }

    componentWillMount(): void {
        this.updateDatasource(this.props.tag);
    }

    componentWillReceiveProps(nextProps: EntriesByTagContainerPropsInterface): void {
        this.updateDatasource(nextProps.tag);
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
                <h1>Entries By Tag: {this.props.tag}</h1>

                <LinearTimelineView datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    updateDatasource(tag: string): void {
        const pageService = this.context.appContext.get('pageService');

        pageService.getEntriesByTag(tag)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }
}

export {
    EntriesByTagContainerPropsInterface,
    EntriesByTagContainerStateInterface,
    EntriesByTagContainer,
};

export default EntriesByTagContainer;
