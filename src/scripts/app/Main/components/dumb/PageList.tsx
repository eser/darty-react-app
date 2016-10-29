import * as React from 'react';
import { Link } from 'react-router';

export interface PageListPropsInterface {
    datasource: any;
    datakey: any;
}

export interface PageListStateInterface {
}

export class PageList extends React.Component<PageListPropsInterface, PageListStateInterface> {

    state: PageListStateInterface;

    constructor(props: PageListPropsInterface) {
        super(props);
    }

    render(): any {
        const data = this.props.datasource[this.props.datakey];

        return (
            <ul>
                {Object.keys(data).map((type) => {
                    const typeKey = `type.${encodeURIComponent(type)}`,
                        typeData = data[type];

                    return (
                        <li key={typeKey}>
                            <h3 key={`${typeKey}.caption`}>{type}</h3>

                            <ul key={`${typeKey}.list`}>
                                {typeData.map((page) => {
                                    const pageKey = `page.${encodeURIComponent(page.name)}`;

                                    return (
                                        <li key={`${typeKey}.page.${pageKey}`}><Link key={`${typeKey}.page.${pageKey}.link`} to={`/pages/${encodeURIComponent(page.name)}`}>{page.name}</Link></li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );
    }

}

export default PageList;
