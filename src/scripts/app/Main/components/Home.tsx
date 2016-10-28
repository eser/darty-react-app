import * as React from 'react';

export class Home extends React.Component<any, any> {

    state: any;

    constructor(props: any) {
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
