import React from 'react';

interface SummaryResultViewProps {
    firstNumber: number;
    secondNumber: number;
    summary: number;
}

interface SummaryResultViewState {
}

class SummaryResultView extends React.PureComponent<SummaryResultViewProps, SummaryResultViewState> {
    constructor(props: SummaryResultViewProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <>
                {this.props.firstNumber} + {this.props.secondNumber} = {this.props.summary}
            </>
        );
    }
}

export {
    SummaryResultView as default,
    SummaryResultViewProps,
    SummaryResultViewState,
}
