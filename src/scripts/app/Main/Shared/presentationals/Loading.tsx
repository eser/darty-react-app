import * as React from 'react';

export interface LoadingPropsInterface {
}

export interface LoadingStateInterface {
}

export class Loading extends React.Component<LoadingPropsInterface, LoadingStateInterface> {

    state: LoadingStateInterface;

    constructor(props: LoadingPropsInterface) {
        super(props);
    }

    render(): any {
        return (
            <div>Loading...</div>
        );
    }

}

export default Loading;
