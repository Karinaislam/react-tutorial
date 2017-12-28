import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from "./Components/TopBar/TopBar.js";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar></TopBar>
        <Header></Header>
        <SideNav></SideNav>
      </div>
    );
  }
}

export default App;
