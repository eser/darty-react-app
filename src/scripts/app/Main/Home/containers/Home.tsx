import * as React from 'react';

export interface HomePropsInterface {
}

export interface HomeStateInterface {
}

export class Home extends React.Component<HomePropsInterface, HomeStateInterface> {

    state: HomeStateInterface;

    constructor(props: HomePropsInterface) {
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

export default Home;
