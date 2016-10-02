import * as React from 'react';
import { hashHistory } from 'react-router';
import * as ReactMarkdown from 'react-markdown';

import { Conditional } from './Conditional.tsx';

import * as Constants from '../../../Constants.ts';

export class LinearTimelineItem extends React.Component<any, any> {

    public state: any;

    public refs: any;

    public context: any;

    static contextTypes = {
        session: React.PropTypes.object.isRequired
    };

    constructor(props: any) {
        super(props);

        this.state = {
            editable: false
        };
    }

    public getContent() {
        return this.props.item.content.replace(
            /\[\[([^\]]*)\]\]/g,
            (all, first) => `[${first}](#/pages/${encodeURIComponent(first)})`
        );
    }

    public toggleEditing() {
        this.setState({
            editable: !this.state.editable
        });
    }

    public saveChanges() {
        this.props.item.content = this.refs.textarea.value;

        this.setState({
            editable: false
        });
    }

    public discardChanges() {
        this.setState({
            editable: false
        });
    }

    public clickHandler(ev) {
        const target = ev.target;

        if (target.tagName === 'A') {
            const linkUrl = target.getAttribute('href');

            if (linkUrl.substring(0, 8) == '#/pages/') {
                const url = `/pages/${linkUrl.substring(8)}`;

                hashHistory.push(url);

                ev.preventDefault();
            }
        }
    }

    public render() {
        if (this.state.editable) {
            return (
                <div>
                    <div>
                        <textarea ref="textarea" defaultValue={this.props.item.content} />
                    </div>
                    <button onClick={this.saveChanges.bind(this)}>save</button>
                    <button onClick={this.discardChanges.bind(this)}>cancel</button>
                </div>
            );
        }

        const isPrivileged = (this.context.session.userLevel >= Constants.USER_LEVEL_EDITOR);

        return (
            <div ref="markdown" onClick={this.clickHandler}>
                <ReactMarkdown source={this.getContent()} />
                <Conditional test={isPrivileged}>
                    <button onClick={this.toggleEditing.bind(this)}>edit</button>
                </Conditional>
            </div>
        );
    }

}
