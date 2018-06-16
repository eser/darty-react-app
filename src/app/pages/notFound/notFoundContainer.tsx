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
            <div>
                <h1 className="title">Not Found</h1>

                Page not found
            </div>
        );
    }
}

export {
    NotFoundContainer as default,
    NotFoundContainerProps,
    NotFoundContainerState,
};
