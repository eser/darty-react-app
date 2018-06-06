import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import ConditionalView from '../shared/conditionalView';

interface LinearTimelineItemViewPropsInterface {
    item: any;
    editable: boolean;
}

interface LinearTimelineItemViewStateInterface {
    editMode: boolean;
}

class LinearTimelineItemView extends React.Component<LinearTimelineItemViewPropsInterface, LinearTimelineItemViewStateInterface> {
    refs: any;

    constructor(props: LinearTimelineItemViewPropsInterface, context: any) {
        super(props, context);

        this.state = {
            editMode: false,
        };
    }

    getContent(): string {
        return this.props.item.content.replace(
            /\[\[([^\]]*)\]\]/g,
            (all, first) => `[${first}](#/pages/${encodeURIComponent(first)}/)`
        );
    }

    toggleEditMode(): void {
        this.setState({
            editMode: !this.state.editMode,
        });
    }

    saveChanges(): void {
        this.props.item.content = this.refs.textarea.value;

        this.setState({
            editMode: false,
        });
    }

    discardChanges(): void {
        this.setState({
            editMode: false,
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
                <ConditionalView test={this.props.editable}>
                    <button onClick={this.toggleEditMode.bind(this)}>edit</button>
                </ConditionalView>
            </div>
        );
    }
}

export {
    LinearTimelineItemView as default,
    LinearTimelineItemViewPropsInterface,
    LinearTimelineItemViewStateInterface,
};
