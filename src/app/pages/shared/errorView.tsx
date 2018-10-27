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
            <React.Fragment>
                Error: {this.props.message}
            </React.Fragment>
        );
    }
}

export {
    ErrorView as default,
    ErrorViewProps,
    ErrorViewState,
};
