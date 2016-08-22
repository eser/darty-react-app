import * as React from 'react';
import { Link } from 'react-router';

export class PageList extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public render() {
        const data = this.props.datasource[this.props.datakey];

        return (
            <ul>
                {data.map((page) => {
                    const pageKey = `page.${encodeURIComponent(page.name)}`;

                    return <li key={`${pageKey}`}><Link key={`${pageKey}.link`} to={`/pages/${encodeURIComponent(page.name)}`}>{page.name}</Link></li>;
                })}
            </ul>
        );
    }

}
