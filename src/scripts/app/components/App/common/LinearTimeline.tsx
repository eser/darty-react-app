import * as React from 'react';
import { Link } from 'react-router';

import { LinearTimelineItem } from './LinearTimelineItem.tsx';

export class LinearTimeline extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);
    }

    public render() {
        const data = this.props.datasource[this.props.datakey];

        let output = [];
        for (const year in data) {
            const yearKey = `year.${encodeURIComponent(year)}`;

            output.push(<h3 key={`${yearKey}.caption`}><Link key={`${yearKey}.link`} to={`/categories/year/${encodeURIComponent(year)}`}>{year}</Link></h3>);
            output.push(
                <ul key={`${yearKey}.list`}>
                    {Object.keys(data[year]).forEach((event) => {
                        if (event === '_items') {
                            return;
                        }

                        const eventKey = `year.${year}.event.${encodeURIComponent(event)}`;

                        output.push(
                            <li key={eventKey}>
                                <h4 key={`${eventKey}.caption`}><Link key={`${eventKey}.caption.link`} to={`/categories/event/${encodeURIComponent(event)}`}>{event}</Link></h4>
                                <ul key={`${eventKey}.list`}>
                                    {data[year][event]._items.map((item) => {
                                        const entryKey = `entry.${encodeURIComponent(item.entry)}`;

                                        return (<li key={entryKey}><LinearTimelineItem key={`${entryKey}.item`} item={item} /></li>);
                                    })}
                                </ul>
                            </li>
                        );
                    })}
                    {data[year]._items.map((item) => {
                        const entryKey = `entry.${encodeURIComponent(item.entry)}`;

                        return (<li key={entryKey}><LinearTimelineItem key={`${entryKey}.item`} id={`${entryKey}.item`} item={item} /></li>);
                    })}
                </ul>
            );
        }

        return (
            <div>
                {output}
            </div>
        );
    }

}
