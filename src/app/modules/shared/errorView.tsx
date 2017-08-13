import * as React from 'react';

interface ErrorViewPropsInterface {
    message: string;
}

interface ErrorViewStateInterface {
}

class ErrorView extends React.Component<ErrorViewPropsInterface, ErrorViewStateInterface> {
    constructor(props: ErrorViewPropsInterface, context: any) {
        super(props, context);
    }

    render(): any {
        return (
            <div>Error: {this.props.message}</div>
        );
    }
}

export {
    ErrorViewPropsInterface,
    ErrorViewStateInterface,
    ErrorView,
};

export default ErrorView;
