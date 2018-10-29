import React from 'react';

import * as styles from '../../assets/styles.scss';

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
            <>
                <h1 className={styles.title}>Not Found</h1>

                Page not found
            </>
        );
    }
}

export {
    NotFoundContainer as default,
    NotFoundContainerProps,
    NotFoundContainerState,
};
