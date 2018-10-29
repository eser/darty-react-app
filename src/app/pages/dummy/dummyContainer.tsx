import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as styles from '../../assets/styles.scss';

import SummaryResultView from './summaryResultView';

import dummyRequestAction from '../../actions/dummyRequest';

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
                <h1 className={styles.title}>Dummy</h1>

                <SummaryResultView firstNumber={this.state.firstNumber} secondNumber={this.state.secondNumber} summary={summary} />
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

const DummyContainerConnected = connect(mapStateToProps, mapDispatchToProps)(DummyContainer);

export {
    DummyContainerConnected as default,
    DummyContainer,
    DummyContainerProps,
    DummyContainerState,
};
