import * as React from 'react';

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
            <div>
                <h1>Home</h1>

                ...and there is a dummy content
            </div>
        );
    }
}

export {
    HomeContainer as default,
    HomeContainerProps,
    HomeContainerState,
};
