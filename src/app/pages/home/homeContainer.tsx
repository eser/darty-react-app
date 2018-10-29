import React from 'react';

import * as styles from '../../assets/styles.scss';

interface HomeContainerProps {
}

interface HomeContainerState {
}

class HomeContainer extends React.Component<HomeContainerProps, HomeContainerState> {
    constructor(props: HomeContainerProps, context: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            <>
                <h1 className={styles.title}>Home</h1>

                ...and there is a dummy content
            </>
        );
    }
}

export {
    HomeContainer as default,
    HomeContainerProps,
    HomeContainerState,
};
