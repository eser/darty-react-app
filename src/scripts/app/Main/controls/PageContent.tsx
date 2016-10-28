import * as React from 'react';

export class PageContent extends React.Component<any, any> {

    state: any;

    constructor(props: any) {
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
