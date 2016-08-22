import * as React from 'react';

import { AppModel } from '../../models/AppModel.ts';
import * as Constants from '../../Constants.ts';

import { PageContent } from './common/PageContent.tsx';

export class PageByName extends React.Component<any, any> {

    public state: any;
    public model: any;

    constructor(props: any) {
        super(props);

        this.state = {
            page: null
        };

        this.model = new AppModel();
        this.updatePage(this.props.params.name);
    }

    public componentWillReceiveProps(nextProps: any) {
        this.updatePage(nextProps.params.name);
    }

    public render() {
        return (
            <div>
                Page: {this.props.params.name}

                <PageContent input={this.state.page} />
            </div>
        );
    }

    private updatePage(name: string) {
        this.model.getPageByName(name)
            .then((response) => { this.setState({ page: response }); });
    }

}
