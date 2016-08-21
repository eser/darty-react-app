import * as React from 'react';
import { Link } from 'react-router';

import { LinearTimelineItem } from './LinearTimelineItem.tsx';

export class LinearTimeline extends React.Component<any, any> {

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

        let output = [];
        for (const year in data) {
            const yearKey = `year.${encodeURIComponent(year)}`;

            output.push(<h3 key={yearKey}>{year}</h3>);

            for (const event in data[year]) {
                if (event === '_items') {
                    continue;
                }

                const eventKey = `year.${year}.event.${encodeURIComponent(event)}`;

                output.push(<h4 key={eventKey}>{event}</h4>);
                output.push(<ul key={`${eventKey}.list`}>
                    {data[year][event]._items.map((item) => {
                        const entryKey = `entry.${encodeURIComponent(item.entry)}`;

                        return (<li key={entryKey}><LinearTimelineItem key={`${entryKey}.item`} item={item} /></li>);
                    })}
                </ul>);
            }

            output.push(<ul key={`${yearKey}.list`}>
                {data[year]._items.map((item) => {
                    const entryKey = `entry.${encodeURIComponent(item.entry)}`;

                    return (<li key={entryKey}><LinearTimelineItem key={`${entryKey}.item`} id={`${entryKey}.item`} item={item} /></li>);
                })}
            </ul>);
        }

        return (
            <div>
                {output}
            </div>
        );
    }

}
