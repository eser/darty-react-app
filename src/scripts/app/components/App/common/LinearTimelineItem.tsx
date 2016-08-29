import * as React from 'react';
import { hashHistory } from 'react-router';
import * as ReactMarkdown from 'react-markdown';

import * as Constants from '../../../Constants.ts';

export class LinearTimelineItem extends React.Component<any, any> {

    public state: any;

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

    public bindEvents() {
        if (!this.state.editable) {
            const elements = this.refs.markdown.querySelectorAll('a');

            for (let element of elements) {
                element.addEventListener(
                    'click',
                    (ev) => {
                        const linkUrl = element.getAttribute('href');

                        if (linkUrl.substring(0, 8) == '#/pages/') {
                            const url = `/pages/${linkUrl.substring(8)}`;

                            hashHistory.push(url);

                            ev.preventDefault();
                        }
                    }
                );
            }
        }
    }

    public componentDidMount() {
        this.bindEvents();
    }

    public componentDidUpdate() {
        this.bindEvents();
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

        const disabled = (this.context.session.userLevel < Constants.USER_LEVEL_EDITOR);

        return (
            <div ref="markdown">
                <ReactMarkdown source={this.getContent()} className="md" />
                <button onClick={this.toggleEditing.bind(this)} disabled={disabled}>edit</button>
            </div>
        );
    }

}
