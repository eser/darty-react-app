import * as React from 'react';

import * as Constants from '../../Constants.ts';

export class TimelineOutput extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public render() {
        if (this.props.input === null) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div>
                Timeline there is.
            </div>
        );
    }

}
