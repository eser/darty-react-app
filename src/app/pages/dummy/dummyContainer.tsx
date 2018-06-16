import * as React from 'react';

import appContext from '../../appContext';

import SummaryResultView from './summaryResultView';
import LoadingView from '../shared/loadingView';
import ErrorView from '../shared/errorView';

interface DummyContainerProps {
}

interface DummyContainerState {
    isCompleted: boolean;
    firstNumber: number;
    secondNumber: number;
    summary?: number;
    error: string | false;
}

class DummyContainer extends React.Component<DummyContainerProps, DummyContainerState> {
    constructor(props: DummyContainerProps, context: any) {
        super(props, context);

        this.state = {
            isCompleted: false,
            firstNumber: 4,
            secondNumber: 7,
            summary: null,
            error: false,
        };
    }

    componentDidMount(): void {
        this.update();
    }

    async update(): Promise<void> {
        const dummyService = appContext.get('dummyService');

        try {
            const summary = await dummyService.getSummary(this.state.firstNumber, this.state.secondNumber);

            this.setState({ isCompleted: true, summary: summary });
        }
        catch (ex) {
            this.setState({ isCompleted: true, error: ex });
        }
    }

    render(): JSX.Element {
        if (!this.state.isCompleted) {
            return (
                <LoadingView />
            );
        }

        if (this.state.error !== false) {
            return (
                <ErrorView message="An error occurred" />
            );
        }

        return (
            <div>
                <h1 className="title">Dummy</h1>

                <SummaryResultView firstNumber={this.state.firstNumber} secondNumber={this.state.secondNumber} summary={this.state.summary} />
            </div>
        );
    }
}

export {
    DummyContainer as default,
    DummyContainerProps,
    DummyContainerState,
};
