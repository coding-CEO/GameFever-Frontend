import React from 'react';

import CustomTextInput from './custom_text_input';
import NormalButton from '../button_components/normal_button_component';

interface Props {
  defaultValue: string;
  isEnable: boolean;
  onSave?(text: string): void;
  placeholder?: string;
  onTextChange?(text: string): void;
  maxLength?: number;
  type?: string,
}

interface State {
  currentTextValue: string;
}

class EditableTextInput extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      currentTextValue: this.props.defaultValue,
    };
  }

  handleTextChange = (newText: string): void => {
    this.setState({
      currentTextValue: newText,
    });
    if (this.props.onTextChange)
      this.props.onTextChange(newText);
  }

  showEditOption = (): JSX.Element => {
    if (this.canShowEditOption()) {
      return <NormalButton title="Save" isEnable={this.props.isEnable} onClick={() => {
        if (this.props.onSave)
          this.props.onSave(this.state.currentTextValue);
      }} />;
    }
    return <React.Fragment />;
  }

  canShowEditOption = (): boolean => {
    if (this.state.currentTextValue !== this.props.defaultValue && this.props.onSave)
      return true;
    return false;
  }

  getInputType = (): string => {
    if (this.props.type)
      return this.props.type;
    return "text";
  }

  render() {
    return (
      <div className={"editableTextInputContainer"}>
        <CustomTextInput type={this.getInputType()} defaultValue={this.state.currentTextValue}
          placeholder={this.props.placeholder} onTextChange={this.handleTextChange}
          isEnable={this.props.isEnable} required={false}
          maxLengthOfCharacters={this.props.maxLength} />
        {this.showEditOption()}
      </div>
    );
  }
}

export default EditableTextInput;