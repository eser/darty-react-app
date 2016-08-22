import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

import { PageList } from './common/PageList.tsx';

export class Page extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            pageList: null
        };

        this.model = new AppModel();
        this.updatePageList();
    }

    public componentWillReceiveProps(nextProps: any) {
        this.updatePageList();
    }

    public render() {
        return (
            <div>
                Page List

                <PageList input={this.state.pageList} />
            </div>
        );
    }

    private updatePageList() {
        this.model.getPages()
            .then((response) => { this.setState({ pageList: response }); });
    }

}
