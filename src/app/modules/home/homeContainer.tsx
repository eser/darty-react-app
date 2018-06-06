import * as React from 'react';

interface HomeContainerPropsInterface {
}

interface HomeContainerStateInterface {
}

class HomeContainer extends React.Component<HomeContainerPropsInterface, HomeContainerStateInterface> {
    constructor(props: HomeContainerPropsInterface, context: any) {
        super(props);
    }

    render(): any {
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
    HomeContainerPropsInterface,
    HomeContainerStateInterface,
};
