import * as React from 'react';

export interface NotFoundPropsInterface {
}

export interface NotFoundStateInterface {
}

export class NotFound extends React.Component<NotFoundPropsInterface, NotFoundStateInterface> {

    state: NotFoundStateInterface;

    constructor(props: NotFoundPropsInterface) {
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
