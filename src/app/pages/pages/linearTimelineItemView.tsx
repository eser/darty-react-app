import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

import ConditionalView from '../shared/conditionalView';

interface LinearTimelineItemViewProps {
    item: any;
    editable: boolean;
}

interface LinearTimelineItemViewState {
    editMode: boolean;
}

class LinearTimelineItemView extends React.Component<LinearTimelineItemViewProps, LinearTimelineItemViewState> {
    refs: any;

    constructor(props: LinearTimelineItemViewProps, context: any) {
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

    render(): JSX.Element {
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
    LinearTimelineItemViewProps,
    LinearTimelineItemViewState,
};
