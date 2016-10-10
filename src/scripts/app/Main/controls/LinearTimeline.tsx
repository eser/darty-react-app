import * as React from 'react';
import { Link } from 'react-router';

import { LinearTimelineItem } from './LinearTimelineItem';

export class LinearTimeline extends React.Component<any, any> {

    state: any;

    constructor(props: any) {
        super(props);
    }

    public render() {
        const data = this.props.datasource[this.props.datakey];

        return (
            <ul>
                {Object.keys(data).map((year) => {
                    const yearKey = `year.${encodeURIComponent(year)}`,
                        yearData = data[year];

                    return (
                        <li key={yearKey}>
                            <h3 key={`${yearKey}.caption`}><Link key={`${yearKey}.link`} to={`/properties/year/${encodeURIComponent(year)}`}>{year}</Link></h3>

                            <ul key={`${yearKey}.list`}>
                                {Object.keys(yearData).map((event) => {
                                    if (event === '_items') {
                                        return null;
                                    }

                                    const eventKey = `year.${year}.event.${encodeURIComponent(event)}`,
                                        eventData = yearData[event];

                                    return (
                                        <li key={eventKey}>
                                            <h4 key={`${eventKey}.caption`}><Link key={`${eventKey}.caption.link`} to={`/properties/event/${encodeURIComponent(event)}`}>{event}</Link></h4>
                                            <ul key={`${eventKey}.list`}>
                                                {eventData._items.map((item) => {
                                                    const entryKey = `entry.${encodeURIComponent(item.entry)}`;

                                                    return (
                                                        <li key={entryKey}><LinearTimelineItem key={`${entryKey}.item`} item={item} /></li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                                {yearData._items.map((item) => {
                                    const entryKey = `entry.${encodeURIComponent(item.entry)}`;

                                    return (
                                        <li key={entryKey}><LinearTimelineItem key={`${entryKey}.item`} id={`${entryKey}.item`} item={item} /></li>
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
