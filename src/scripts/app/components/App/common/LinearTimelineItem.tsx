import * as React from 'react';
import { Link } from 'react-router';

export class LinearTimelineItem extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public makeLinks(key, content) {
        const parts = [];

        let lastIndex = 0;

        while (true) {
            const pos = content.indexOf('[[', lastIndex);

            if (pos === -1) {
                parts.push(content.substring(lastIndex, content.length));
                break;
            }

            const endPos = content.indexOf(']]', pos + 2);

            if (endPos === -1) {
                parts.push(content.substring(lastIndex, content.length));
                break;
            }

            parts.push(content.substring(lastIndex, pos));
            const tag = content.substring(pos + 2, endPos);
            parts.push(<Link key={`${key}.link.${pos}`} to={`/tag/${encodeURIComponent(tag)}`}>{tag}</Link>);
            lastIndex = endPos + 2;
        }

        return parts;
    }

    public render() {
        return (
            <span>
                {this.makeLinks(this.props.id, this.props.item.content)}
            </span>
        );
    }

}
