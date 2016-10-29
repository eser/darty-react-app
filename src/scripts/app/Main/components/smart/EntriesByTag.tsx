import * as React from 'react';
import * as ReactRedux from 'react-redux';

import { app } from '../../../';

import { PageModel } from '../../models/PageModel';
import { LinearTimeline } from '../dumb/LinearTimeline';

import * as constants from '../../../constants';

export interface EntriesByTagPropsInterface {
    store: any;
    params: any;
}

export interface EntriesByTagStateInterface {
    datasource: any;
    error: any;
}

export class EntriesByTag_ extends React.Component<EntriesByTagPropsInterface, EntriesByTagStateInterface> {

    state: EntriesByTagStateInterface;
    model: PageModel;

    constructor(props: EntriesByTagPropsInterface) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = app.services.get(PageModel);
        this.updateDatasource(this.props.params.tag);
    }

    componentWillReceiveProps(nextProps: EntriesByTagPropsInterface): void {
        this.updateDatasource(nextProps.params.tag);
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

        const isEditable = (this.props.store.login.userLevel >= constants.UserLevels.Editor);

        return (
            <div>
                <h1>Entries By Tag: {this.props.params.tag}</h1>

                <LinearTimeline datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    updateDatasource(tag: string): void {
        this.model.getEntriesByTag(tag)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }

}

export const EntriesByTag = ReactRedux.connect
    ((store) => ({ store: store }))
    (EntriesByTag_);

export default EntriesByTag;
