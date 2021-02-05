import React from 'react';
import './sass/global.scss';
import './App.scss';

import EditableTextInput from './components/basic_components/input_components/editable_text_input';
import NormalButton from './components/basic_components/button_components/normal_button_component';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

interface State{
  
}

class App extends React.Component<any, State> {

  constructor(props: any){
    super(props);
    this.debugHandler.bind(this);
  }

  debugHandler = () => {
    //TODO: this is temperary function, delete when done
  }

  render(){
    return (
      <div className="row">
        <div className="main_container col-">
          <EditableTextInput placeholder="Placeholder" isEnable={true} defaultValue=""/>
          <NormalButton title="Submit" onClick={this.debugHandler} isEnable={true}/>
          {/* TODO: Create these components */}
          {/* 
          <NavigationBar />
          <ErrorMessage />
          <Router>
          </Router>
          <Footer /> 
          */}
        </div>
      </div>
    );
  }
}

export default App;
