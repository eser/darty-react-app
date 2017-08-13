import * as React from 'react';

interface NotFoundContainerPropsInterface {
}

interface NotFoundContainerStateInterface {
}

class NotFoundContainer extends React.Component<NotFoundContainerPropsInterface, NotFoundContainerStateInterface> {
    constructor(props: NotFoundContainerPropsInterface, context: any) {
        super(props, context);
    }

    render(): any {
        return (
            <div>
                <h1>Not Found</h1>

                Page not found
            </div>
        );
    }
}

export {
    NotFoundContainerPropsInterface,
    NotFoundContainerStateInterface,
    NotFoundContainer,
};

export default NotFoundContainer;
