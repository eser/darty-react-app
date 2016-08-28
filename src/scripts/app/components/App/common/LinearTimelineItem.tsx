import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

export class LinearTimelineItem extends React.Component<any, any> {

    public state: any;

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
        const editContentId = `edit-content-${this.props.item._id}`,
            editContentValue = document.getElementById(editContentId).value;

        this.props.item.content = editContentValue;

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
                        <textarea id={`edit-content-${this.props.item._id}`}>{this.props.item.content}</textarea>
                    </div>
                    <button onClick={this.saveChanges.bind(this)}>save</button>
                    <button onClick={this.discardChanges.bind(this)}>cancel</button>
                </div>
            );
        }

        return (
            <div>
                <ReactMarkdown source={this.makeLinks(this.props.item.content)} className="md" />
                <button onClick={this.toggleEditing.bind(this)}>edit</button>
            </div>
        );
    }

}
