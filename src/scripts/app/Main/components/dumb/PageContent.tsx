import * as React from 'react';

export interface PageContentPropsInterface {
    datasource: any;
    datakey: any;
}

export interface PageContentStateInterface {
}

export class PageContent extends React.Component<PageContentPropsInterface, PageContentStateInterface> {

    state: PageContentStateInterface;

    constructor(props: PageContentPropsInterface) {
        super(props);
    }

    render(): any {
        const data = this.props.datasource[this.props.datakey];

        return (
            <div>
                {data.content}
            </div>
        );
    }

}

export default PageContent;
