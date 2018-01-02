import React, { Component } from 'react';
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";
import MainBody from "../MainBody/MainBody";


class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
        <SideNav></SideNav>
        <MainBody></MainBody>
            </div>
        );
    }
}

export default Home;