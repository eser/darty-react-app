declare var global: any;

import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import { Conditional } from './Conditional';

import * as Constants from '../../Constants';

export class LinearTimelineItem extends React.Component<any, any> {

    state: any;
    refs: any;
    context: any;

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
            <div ref="markdown">
                <ReactMarkdown source={this.getContent()} />
                <Conditional test={isPrivileged}>
                    <button onClick={this.toggleEditing.bind(this)}>edit</button>
                </Conditional>
            </div>
        );
    }

}
