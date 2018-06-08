import * as React from 'react';

interface ConditionalViewPropsInterface {
    test: boolean;
    children: any;
}

interface ConditionalViewStateInterface {
}

class ConditionalView extends React.Component<ConditionalViewPropsInterface, ConditionalViewStateInterface> {
    constructor(props: ConditionalViewPropsInterface, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        if (!this.props.test) {
            return null;
        }

        return this.props.children;
    }
}

export {
    ConditionalView as default,
    ConditionalViewPropsInterface,
    ConditionalViewStateInterface,
};
