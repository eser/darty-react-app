import * as React from 'react';
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

    public makeLinks(content) {
        return content.replace(/\[\[([^\]]*)\]\]/g, (all, first) => `[${first}](#/pages/${encodeURIComponent(first)})`);
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

        const disabled = (this.context.session.userLevel < Constants.USER_LEVEL_EDITOR);

        return (
            <div>
                <ReactMarkdown source={this.makeLinks(this.props.item.content)} className="md" />
                <button onClick={this.toggleEditing.bind(this)} disabled={disabled}>edit</button>
            </div>
        );
    }

}
