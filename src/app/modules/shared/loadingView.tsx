import * as React from 'react';

interface LoadingViewPropsInterface {
}

interface LoadingViewStateInterface {
}

class LoadingView extends React.Component<LoadingViewPropsInterface, LoadingViewStateInterface> {
    constructor(props: LoadingViewPropsInterface, context: any) {
        super(props, context);
    }

    render(): any {
        return (
            <div>Loading...</div>
        );
    }
}

export {
    LoadingViewPropsInterface,
    LoadingViewStateInterface,
    LoadingView,
};

export default LoadingView;
