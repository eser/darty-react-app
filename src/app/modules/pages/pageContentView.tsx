import * as React from 'react';

interface PageContentViewPropsInterface {
    datasource: any;
    datakey: any;
}

interface PageContentViewStateInterface {
}

class PageContentView extends React.Component<PageContentViewPropsInterface, PageContentViewStateInterface> {
    constructor(props: PageContentViewPropsInterface, context: any) {
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
    PageContentViewPropsInterface,
    PageContentViewStateInterface,
};
