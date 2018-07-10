import React, { Component } from "react";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import MainBody from "../MainBody/MainBody";

// to help with indentation etc.. I use a tool called Prettier,
// it's fairly commonly used in the js world right now.
// https://github.com/prettier/prettier
//
// It opens up some thinking space because you'll never have to think
// about formatting your text ever again. Let's you worry about the
// important stuff, like getting your app to work. My team at work started
// using it, and we've never looked back.
//
// I ran prettier on this file so you could see what it would change. It's
// a short file, but I think you can get the gist.
//
class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideNav />
        <MainBody />
      </div>
    );
  }
}

export default Home;
