import * as React from 'react';

export class Conditional extends React.Component<any, any> {

    state: any;

    constructor(props: any) {
        super(props);
    }

    public render() {
        if (!this.props.test) {
            return null;
        }

        return this.props.children;
    }

}
