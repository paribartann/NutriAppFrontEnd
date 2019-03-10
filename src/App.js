import React, { Component } from 'react';
import Mainpage from './components/mainPage';
import './App.css';
import Formcomponent from './components/form';
import { Router, Route, Switch } from "react-router-dom"
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}> 
          <Switch>
                <Route exact path="/" component={Mainpage} />
                <Route path="/welcomePage" component={Formcomponent}  />
            </Switch>
          </Router> 
       </div>
    );
  }
}

export default App;
