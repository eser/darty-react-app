import * as React from 'react';

interface ConditionalViewProps {
    test: boolean;
    children: any;
}

interface ConditionalViewState {
}

class ConditionalView extends React.Component<ConditionalViewProps, ConditionalViewState> {
    constructor(props: ConditionalViewProps, context: any) {
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
    ConditionalViewProps,
    ConditionalViewState,
};
