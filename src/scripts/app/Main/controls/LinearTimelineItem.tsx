declare var global: any;

import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import { Conditional } from './Conditional';

import * as constants from '../../constants';

export class LinearTimelineItem extends React.Component<any, any> {

    state: any;
    refs: any;
    context: any;

    static contextTypes: { [key: string]: any } = {
        session: React.PropTypes.object.isRequired
    };

    constructor(props: any) {
        super(props);

        this.state = {
            editable: false
        };
    }

    getContent(): string {
        return this.props.item.content.replace(
            /\[\[([^\]]*)\]\]/g,
            (all, first) => `[${first}](#/pages/${encodeURIComponent(first)})`
        );
    }

    toggleEditing(): void {
        this.setState({
            editable: !this.state.editable
        });
    }

    saveChanges(): void {
        this.props.item.content = this.refs.textarea.value;

        this.setState({
            editable: false
        });
    }

    discardChanges(): void {
        this.setState({
            editable: false
        });
    }

    render(): any {
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

        const isPrivileged = (this.context.session.userLevel >= constants.USER_LEVEL_EDITOR);

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

export default LinearTimelineItem;
