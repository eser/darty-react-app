import * as React from 'react';

export interface ConditionalPropsInterface {
    test: boolean;
    children: any;
}

export interface ConditionalStateInterface {
}

export class Conditional extends React.Component<ConditionalPropsInterface, ConditionalStateInterface> {

    state: ConditionalStateInterface;

    constructor(props: ConditionalPropsInterface) {
        super(props);
    }

    render(): any {
        if (!this.props.test) {
            return null;
        }

        return this.props.children;
    }

}

export default Conditional;
