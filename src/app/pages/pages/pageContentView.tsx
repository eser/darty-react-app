import * as React from 'react';

interface PageContentViewProps {
    datasource: any;
    datakey: any;
}

interface PageContentViewState {
}

class PageContentView extends React.Component<PageContentViewProps, PageContentViewState> {
    constructor(props: PageContentViewProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        const data = this.props.datasource[this.props.datakey];

        return (
            <div>
                {data.content}
            </div>
        );
    }
}

export {
    PageContentView as default,
    PageContentViewProps,
    PageContentViewState,
};
