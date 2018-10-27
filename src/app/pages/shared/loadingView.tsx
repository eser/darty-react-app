import * as React from 'react';

interface LoadingViewProps {
}

interface LoadingViewState {
}

class LoadingView extends React.Component<LoadingViewProps, LoadingViewState> {
    constructor(props: LoadingViewProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                Loading...
            </React.Fragment>
        );
    }
}

export {
    LoadingView as default,
    LoadingViewProps,
    LoadingViewState,
};
