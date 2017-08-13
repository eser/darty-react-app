import * as React from 'react';
import { Link } from 'react-router-dom';

import { LinearTimelineItemView } from './LinearTimelineItemView';

interface LinearTimelineViewPropsInterface {
    datasource: any;
    datakey: any;
    editable: boolean;
}

interface LinearTimelineViewStateInterface {
}

class LinearTimelineView extends React.Component<LinearTimelineViewPropsInterface, LinearTimelineViewStateInterface> {
    constructor(props: LinearTimelineViewPropsInterface, context: any) {
        super(props, context);
    }

    render(): any {
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
                                                        <li key={entryKey}><LinearTimelineItemView key={`${entryKey}.item`} item={item} editable={this.props.editable} /></li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                                {yearData._items.map((item) => {
                                    const entryKey = `entry.${encodeURIComponent(item.entry)}`;

                                    return (
                                        <li key={entryKey}><LinearTimelineItemView key={`${entryKey}.item`} id={`${entryKey}.item`} item={item} editable={this.props.editable} /></li>
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
    LinearTimelineViewPropsInterface,
    LinearTimelineViewStateInterface,
    LinearTimelineView,
};

export default LinearTimelineView;
