import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


import TopBar from "./Components/TopBar/TopBar.js";
import Home from './Components/Home/Home';
import Html from './Components/Html/Html';
import CssMainPage from './Components/CssMainPage/CssMainPage';
import JSMainPage from './Components/JSMainPage/JSMainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar></TopBar>
        <Router>
          <Switch>
          <Route exact path="/" component={Home}></Route>
            <Route path="/html" component={Html}></Route>
            <Route path="/css" component={CssMainPage}></Route>
            <Route path="/js" component={JSMainPage}></Route>
          </Switch>
          </Router> 
      </div>
    );
  }
}

export default App;
