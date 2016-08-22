import * as React from 'react';

export class PageContent extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public render() {
        const data = this.props.input;

        if (data === null) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                {data.page.content}
            </div>
        );
    }

}
