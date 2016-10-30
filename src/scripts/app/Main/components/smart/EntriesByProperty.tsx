import * as React from 'react';
import * as ReactRedux from 'react-redux';

import { app } from '../../../';

import { PageModel } from '../../models/PageModel';
import { LinearTimeline } from '../dumb/LinearTimeline';
import { Loading } from '../dumb/Loading';
import { Error } from '../dumb/Error';

import * as constants from '../../../constants';

export interface EntriesByPropertyPropsInterface {
    store: any;
    params: any;
}

export interface EntriesByPropertyStateInterface {
    datasource: any;
    error: any;
}

export class EntriesByProperty_ extends React.Component<EntriesByPropertyPropsInterface, EntriesByPropertyStateInterface> {

    state: EntriesByPropertyStateInterface;
    model: PageModel;

    constructor(props: EntriesByPropertyPropsInterface) {
        super(props);

        this.state = {
            datasource: null,
            error: false
        };

        this.model = app.services.get(PageModel);
        this.updateDatasource(this.props.params.property, this.props.params.value);
    }

    componentWillReceiveProps(nextProps: EntriesByPropertyPropsInterface): void {
        this.updateDatasource(nextProps.params.property, nextProps.params.value);
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
                <h1>Entries By Property: {this.props.params.property}={this.props.params.value}</h1>

                <LinearTimeline datasource={this.state.datasource} datakey="entries" editable={isEditable} />
            </div>
        );
    }

    updateDatasource(property: string, value: string): void {
        this.model.getEntriesByProperty(property, value)
            .then((response) => { this.setState({ datasource: response, error: false }); })
            .catch((err) => { this.setState({ datasource: null, error: err }); });
    }

}

export const EntriesByProperty = ReactRedux.connect
    ((store) => ({ store: store }))
    (EntriesByProperty_);

export default EntriesByProperty;
