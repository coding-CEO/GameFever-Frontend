import React from 'react';
import './App.scss';

import NavigationBar from './components/navigationBar_components/navigationBar';
import ErrorMessage from './components/error_components/errorMessage_component';

import HomePage from './components/home_components/HomePage';
import LoginPage from './components/authentication_components/login_page';
import SignUpPage from './components/authentication_components/signup_page';
import ErrorPage from './components/error_components/errorPage_component';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        <Router>
          <div className="row-nomargin">
            <div className="col-12">
              <Route component={NavigationBar} />
            </div>
          </div>
          <div className="row-nomargin">
            <div className="col-12">
              {/* TODO: generate error messages programatically through ErrorHandler Class */}
              {/* <ErrorMessage message={"Access Denied - 401"} />
              <ErrorMessage message={"Nikal - 403"} /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} exact />
                <Route path="/signup" component={SignUpPage} exact />
                {/* <Route path="/" component={}/> TODO: category component */}
                <Route path="*" component={ErrorPage} />
              </Switch>
            </div>
          </div>
          {/* TODO: Footer */}
          {/* <Footer />  */}
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
