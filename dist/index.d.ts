import * as React from 'react';
import './index.scss';
interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    suggestionFunction: (value: string) => Promise<string[]>;
    debounceTimeout?: number;
    className?: string;
    placeholder?: string;
    required?: boolean;
}
interface State {
    value: string;
    suggestions: string[];
    loading: boolean;
    lastCall: number | null;
    debounceTimeout: number;
    lastOnChangeEvent: React.ChangeEvent<HTMLInputElement> | null;
}
declare class JohnnyMnemonic extends React.Component<Props, State> {
    private inputRef;
    private ulRef;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private manageFocus;
    private manageKeyDown;
    private onChange;
    private onSuggestionClick;
    render(): JSX.Element;
}
export default JohnnyMnemonic;
