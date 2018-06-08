import * as React from 'react';

interface LoadingViewPropsInterface {
}

interface LoadingViewStateInterface {
}

class LoadingView extends React.Component<LoadingViewPropsInterface, LoadingViewStateInterface> {
    constructor(props: LoadingViewPropsInterface, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <div>Loading...</div>
        );
    }
}

export {
    LoadingView as default,
    LoadingViewPropsInterface,
    LoadingViewStateInterface,
};
