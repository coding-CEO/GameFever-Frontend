import React from 'react';
import './App.scss';

import NavigationBar from './components/navigationBar_components/navigationBar';

import EditableImageComponent from './components/basic_components/image_components/editable_image_component';
import EditableTextInput from './components/basic_components/input_components/editable_text_input';
import NormalButton from './components/basic_components/button_components/normal_button_component';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

interface State {
  isEnable: boolean;
}

class App extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.debugHandler.bind(this);
    this.state = { isEnable: true }
  }

  debugHandler = (d: any) => {
    //TODO: this is temperary function, delete when done
    console.log("Debug Handler Called");
    this.setState({ isEnable: false });
    setTimeout(() => this.setState({ isEnable: true }), 3000);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row-nomargin">
          <div className="col-12">
            <NavigationBar />
          </div>
        </div>
        <div className="row">
          <div className="col- col-t-10">
            {/* TODO: Create these components */}
            {/*
          <ErrorMessage />
          <Router>
          </Router>
          <Footer /> 
          */}
            <EditableImageComponent onSave={this.debugHandler} isEnable={this.state.isEnable} />
            <EditableTextInput placeholder="Editable Placeholder" isEnable={this.state.isEnable} defaultValue="" onSave={this.debugHandler} />
            <EditableTextInput placeholder="Normal Placeholder" isEnable={this.state.isEnable} defaultValue="" />
            <NormalButton title="Submit" onClick={this.debugHandler} isEnable={this.state.isEnable} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
