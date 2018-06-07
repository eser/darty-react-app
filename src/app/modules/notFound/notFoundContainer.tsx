import * as React from 'react';

interface NotFoundContainerPropsInterface {
}

interface NotFoundContainerStateInterface {
}

class NotFoundContainer extends React.Component<NotFoundContainerPropsInterface, NotFoundContainerStateInterface> {
    constructor(props: NotFoundContainerPropsInterface, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Not Found</h1>

                Page not found
            </div>
        );
    }
}

export {
    NotFoundContainer as default,
    NotFoundContainerPropsInterface,
    NotFoundContainerStateInterface,
};
