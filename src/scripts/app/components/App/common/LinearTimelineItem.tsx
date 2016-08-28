import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

export class LinearTimelineItem extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public makeLinks(content) {
        return content.replace(/\[\[([^\]]*)\]\]/g, (all, first) => `[${first}](#/pages/${encodeURIComponent(first)})`);
    }

    public render() {
        return (
            <ReactMarkdown source={this.makeLinks(this.props.item.content)} className="md" />
        );
    }

}
