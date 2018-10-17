import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SummaryResultView from './summaryResultView';

import dummyRequestAction from '../../actions/dummyRequest';

import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';
import { stat } from 'fs';

interface DummyContainerProps {
}

interface DummyContainerState {
    firstNumber: number;
    secondNumber: number;
}

class DummyContainer extends React.Component<DummyContainerProps, DummyContainerState> {
    constructor(props: DummyContainerProps, context: any) {
        super(props, context);

        this.state = {
            firstNumber: 4,
            secondNumber: 7,
        };
    }

    componentDidMount(): void {
        this.update();
    }

    async update(): Promise<void> {
        this.props.dummyRequestAction(this.state.firstNumber, this.state.secondNumber);
    }

    render(): JSX.Element {
        // if (!this.state.isCompleted) {
        //     return (
        //         <LoadingView />
        //     );
        // }

        // if (this.state.error !== false) {
        //     return (
        //         <ErrorView message="An error occurred" />
        //     );
        // }

        let summary;

        if (this.props.dummy.loading) {
            summary = 'Calculating...';
        }
        else {
            summary = this.props.dummy.result;
        }

        return (
            <div>
                <h1 className="title">Dummy</h1>

                <SummaryResultView firstNumber={this.state.firstNumber} secondNumber={this.state.secondNumber} summary={summary} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dummy: state.dummy,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    dummyRequestAction,
}, dispatch);

const DummyContainerConnected = connect(mapStateToProps, mapDispatchToProps)(DummyContainer);

export {
    DummyContainerConnected as default,
    DummyContainer,
    DummyContainerProps,
    DummyContainerState,
};
