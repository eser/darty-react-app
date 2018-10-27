import * as React from 'react';

interface NotFoundContainerProps {
}

interface NotFoundContainerState {
}

class NotFoundContainer extends React.Component<NotFoundContainerProps, NotFoundContainerState> {
    constructor(props: NotFoundContainerProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <React.Fragment>
                <h1 className="title">Not Found</h1>

                Page not found
            </React.Fragment>
        );
    }
}

export {
    NotFoundContainer as default,
    NotFoundContainerProps,
    NotFoundContainerState,
};
