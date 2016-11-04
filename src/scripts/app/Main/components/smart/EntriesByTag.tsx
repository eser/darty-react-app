import * as React from 'react';
import * as ReactRedux from 'react-redux';

import { app } from '../../../';

import { PageModel } from '../../models/PageModel';
import { LinearTimeline } from '../dumb/LinearTimeline';
import { Loading } from '../dumb/Loading';
import { Error } from '../dumb/Error';

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
    ((state) => ({ store: state }))
    (EntriesByTag_);

export default EntriesByTag;
