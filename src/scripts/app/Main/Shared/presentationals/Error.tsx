import * as React from 'react';

export interface ErrorPropsInterface {
    message: string;
}

export interface ErrorStateInterface {
}

export class Error extends React.Component<ErrorPropsInterface, ErrorStateInterface> {

    state: ErrorStateInterface;

    constructor(props: ErrorPropsInterface) {
        super(props);
    }

    render(): any {
        return (
            <div>Error: {this.props.message}</div>
        );
    }

}

export default Error;
