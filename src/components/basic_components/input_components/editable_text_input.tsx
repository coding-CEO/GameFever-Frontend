import React from 'react';

import CustomTextInput from './custom_text_input';

interface Props {
    defaultValue: string;
    isEnable: boolean;
    onSave?: Function;
    placeholder?: string;
    onTextChange?: Function;
}

interface State {
    currentTextValue: string;
}

class EditableTextInput extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
        currentTextValue: this.props.defaultValue,
    };
  }

  handleTextChange = (newText:string): void => {
    this.setState({
      currentTextValue: newText,
    });
    if(this.props.onTextChange)
      this.props.onTextChange(newText);
  }

  showEditOption = (): JSX.Element => {
    let a = <button onClick={() => {
        if(this.props.onSave)
            this.props.onSave(this.state.currentTextValue);
    }}>Save</button>;
    return a;
  }

  canShowEditOption = (): boolean => {
    if(this.state.currentTextValue !== this.props.defaultValue && this.props.onSave)
        return true;
    return false;
  }
  
  render(){
    return (
      <div className="editableTextInputContainer">
          <CustomTextInput type="text" defaultValue={this.state.currentTextValue}
            placeholder={this.props.placeholder} onTextChange={this.handleTextChange}
            isEnable={this.props.isEnable} required={false}/>
          {this.canShowEditOption() && this.showEditOption()}
      </div>
    );
  }
}

export default EditableTextInput;