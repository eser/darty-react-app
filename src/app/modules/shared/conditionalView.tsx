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

    render(): any {
        if (!this.props.test) {
            return null;
        }

        return this.props.children;
    }
}

export {
    ConditionalViewPropsInterface,
    ConditionalViewStateInterface,
    ConditionalView,
};

export default ConditionalView;
