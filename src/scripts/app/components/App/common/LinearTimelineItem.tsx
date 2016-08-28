import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

export class LinearTimelineItem extends React.Component<any, any> {

    public state: any;

    constructor(props: any) {
        super(props);

        this.state = {
            editable: false
        };

        // this.contextTypes = {
        //     session: React.PropTypes.object.isRequried
        // };
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
                        <textarea ref="textarea">{this.props.item.content}</textarea>
                    </div>
                    <button onClick={this.saveChanges.bind(this)}>save</button>
                    <button onClick={this.discardChanges.bind(this)}>cancel</button>
                </div>
            );
        }

        // {this.context.session.userLevel}
        return (
            <div>
                <ReactMarkdown source={this.makeLinks(this.props.item.content)} className="md" />
                <button onClick={this.toggleEditing.bind(this)}>edit</button>
            </div>
        );
    }

}
