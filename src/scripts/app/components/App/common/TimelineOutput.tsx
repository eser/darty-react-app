import * as React from 'react';
import { Link } from 'react-router';

export class TimelineOutput extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public makeLinks(content) {
        const parts = [];

        let lastIndex = 0;

        while (true) {
            let pos = content.indexOf('[[', lastIndex);

            if (pos === -1) {
                parts.push(content.substring(lastIndex, content.length));
                break;
            }

            let endPos = content.indexOf(']]', pos + 2);

            if (endPos === -1) {
                parts.push(content.substring(lastIndex, content.length));
                break;
            }

            parts.push(content.substring(lastIndex, pos));
            const tag = content.substring(pos + 2, endPos);
            parts.push(<Link to={`/tag/${tag}`}>{tag}</Link>);
            lastIndex = endPos + 2;
        }

        return parts;
    }

    public render() {
        const data = this.props.input;

        if (data === null) {
            return (
                <div>Loading...</div>
            );
        }

        console.log(this.props.input);

        let output = [];
        for (const year in data) {
            output.push(<h3>{year}</h3>);

            for (const event in data[year]) {
                if (event === '_items') {
                    continue;
                }

                output.push(<h4>{event}</h4>);
                output.push(<ul>
                    {data[year][event]._items.map((item) => <li>{this.makeLinks(item.content)}</li>)}
                </ul>);
            }

            output.push(<ul>
                {data[year]._items.map((item) => <li>{this.makeLinks(item.content)}</li>)}
            </ul>);
        }

        return (
            <div>
                { output }
            </div>
        );
    }

}
