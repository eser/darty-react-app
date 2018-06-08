import * as React from 'react';

interface ErrorViewProps {
    message: string;
}

interface ErrorViewState {
}

class ErrorView extends React.Component<ErrorViewProps, ErrorViewState> {
    constructor(props: ErrorViewProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <div>Error: {this.props.message}</div>
        );
    }
}

export {
    ErrorView as default,
    ErrorViewProps,
    ErrorViewState,
};
