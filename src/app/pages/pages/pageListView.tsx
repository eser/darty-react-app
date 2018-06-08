import * as React from 'react';
import { Link } from 'react-router-dom';

interface PageListViewProps {
    datasource: any;
    datakey: any;
}

interface PageListViewState {
}

class PageListView extends React.Component<PageListViewProps, PageListViewState> {
    constructor(props: PageListViewProps, context: any) {
        super(props, context);
    }

    render(): JSX.Element {
        const data = this.props.datasource[this.props.datakey];

        return (
            <ul className="fa-ul">
                {Object.keys(data).map((type) => {
                    const typeKey = `type.${encodeURIComponent(type)}`,
                        typeData = data[type];

                    return (
                        <li key={typeKey}>
                            <h3 key={`${typeKey}.caption`}><i className="fa-li fa fa-folder-o fa-fw"></i>{type}</h3>

                            <ul className="fa-ul" key={`${typeKey}.list`}>
                                {typeData.map((page) => {
                                    const pageKey = `page.${encodeURIComponent(page.name)}`;

                                    return (
                                        <li key={`${typeKey}.page.${pageKey}`}><Link key={`${typeKey}.page.${pageKey}.link`} to={`/pages/${encodeURIComponent(page.name)}/`}><i className="fa-li fa fa-file-o fa-fw"></i>{page.name}</Link></li>
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

export {
    PageListView as default,
    PageListViewProps,
    PageListViewState,
}
