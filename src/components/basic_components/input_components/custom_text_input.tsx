import React from 'react';
var classNames = require('classnames');

interface Props {
    type: string;
    isEnable: boolean;
    onTextChange?: Function;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string;
    maxLengthOfCharacters?: number;
}

class CustomTextInput extends React.Component<Props, any> {

  constructor(props: Props){
    super(props);
    this.handleBlur.bind(this);
    this.getClassNames.bind(this);
  }

  handleBlur = (input: React.FocusEvent<HTMLInputElement>): void => {
    if(input.target.value){
      input.target.classList.add('hasValue');
    }else{
      input.target.classList.remove('hasValue');
    }
  }

  getClassNames = ():string => {
    let inputClassNames = classNames({
      'hasValue': this.props.defaultValue,
      'disable': !this.props.isEnable,
    });

    return inputClassNames;
  }

  render(){
    return (
      <div className="custom_text_input_container">
          <input className={this.getClassNames()} type={this.props.type} 
            maxLength={this.props.maxLengthOfCharacters}
            defaultValue={this.props.defaultValue} required={this.props.required}
            onBlur={(input) => this.handleBlur(input)}
            onChange={(input) => {
              // Handling max length of input
              if(this.props.maxLengthOfCharacters){
                if(input.target.value.length > this.props.maxLengthOfCharacters){
                  input.target.value = input.target.value.slice(0, this.props.maxLengthOfCharacters);
                  return;
                }
              }
              if(this.props.onTextChange)
                this.props.onTextChange(input.target.value);
            }}/>
          {this.props.placeholder && <span className="placeholder">{this.props.placeholder}</span>}
      </div>
    );
  }
}

export default CustomTextInput;