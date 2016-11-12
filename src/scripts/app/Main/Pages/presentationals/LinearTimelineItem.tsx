import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import { Conditional } from '../../Shared/presentationals/Conditional';

export interface LinearTimelineItemPropsInterface {
    item: any;
    editable: boolean;
}

export interface LinearTimelineItemStateInterface {
    editMode: boolean;
}

export class LinearTimelineItem extends React.Component<LinearTimelineItemPropsInterface, LinearTimelineItemStateInterface> {

    state: LinearTimelineItemStateInterface;
    refs: any;

    constructor(props: LinearTimelineItemPropsInterface) {
        super(props);

        this.state = {
            editMode: false
        };
    }

    getContent(): string {
        return this.props.item.content.replace(
            /\[\[([^\]]*)\]\]/g,
            (all, first) => `[${first}](#/pages/${encodeURIComponent(first)})`
        );
    }

    toggleEditMode(): void {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    saveChanges(): void {
        this.props.item.content = this.refs.textarea.value;

        this.setState({
            editMode: false
        });
    }

    discardChanges(): void {
        this.setState({
            editMode: false
        });
    }

    render(): any {
        if (this.state.editMode) {
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

        return (
            <div ref="markdown">
                <ReactMarkdown source={this.getContent()} />
                <Conditional test={this.props.editable}>
                    <button onClick={this.toggleEditMode.bind(this)}>edit</button>
                </Conditional>
            </div>
        );
    }

}

export default LinearTimelineItem;
