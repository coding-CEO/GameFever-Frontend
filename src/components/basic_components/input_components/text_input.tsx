import React from 'react';

interface Props {
    placeholder?: string;
}

class NormalTextInput extends React.Component<Props, any> {
  
  render(){
    return (
      <div className="text_input_container">
          <input type="text" placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

export default NormalTextInput;
