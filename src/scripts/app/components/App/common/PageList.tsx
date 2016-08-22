import * as React from 'react';
import { Link } from 'react-router';

export class PageList extends React.Component<any, any> {

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
            <ul>
                {data.pages.map((page) => {
                    const pageKey = `page.${encodeURIComponent(page.name)}`;

                    return <li key={`${pageKey}`}><Link key={`${pageKey}.link`} to={`/page/${encodeURIComponent(page.name)}`}>{page.name}</Link></li>;
                })}
            </ul>
        );
    }

}
