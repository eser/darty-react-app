import * as React from 'react';

export class TimelineOutput extends React.Component<any, any> {

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
                    {data[year][event]._items.map((item) => <li>{item.content}</li>)}
                </ul>);
            }

            output.push(<ul>
                {data[year]._items.map((item) => <li>{item.content}</li>)}
            </ul>);
        }

        return (
            <div>
                { output }
            </div>
        );
    }

}
