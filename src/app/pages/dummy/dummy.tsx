import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import dummyRequestAction from '../../actions/dummyRequest';

import SummaryResult from './summaryResult';

import * as bulmaStyles from 'bulma';

class Dummy extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            firstNumber: 4,
            secondNumber: 7,
        };
    }

    componentDidMount(): void {
        this.update();
    }

    update(): void {
        this.props.dummyRequestAction(this.state.firstNumber, this.state.secondNumber);
    }

    render(): JSX.Element {
        let summary;

        if (this.props.dummy.loading) {
            summary = 'Calculating...';
        }
        else {
            summary = this.props.dummy.result;
        }

        return (
            <>
                <h1 className={bulmaStyles.title}>Dummy</h1>

                <SummaryResult firstNumber={this.state.firstNumber} secondNumber={this.state.secondNumber} summary={summary} />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    dummy: state.dummy,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    dummyRequestAction,
}, dispatch);

const DummyConnected = connect(mapStateToProps, mapDispatchToProps)(Dummy);

export {
    DummyConnected as default,
    Dummy,
};
