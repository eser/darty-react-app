import * as React from 'react';

export class NotFound extends React.Component<any, any> {

    state: any;

    constructor(props: any) {
        super(props);
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

export default NotFound;
