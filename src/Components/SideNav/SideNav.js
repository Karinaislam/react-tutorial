import React, { Component } from 'react';
import "./SideNav.css"


class SideNav extends Component {
    render() {
        return (
            <div>
                <div className="sideNav">
                    <ul>
                        <li>Tutorials</li>
                        <li>Blogs</li>
                        <li>Podcast</li>
                        <li>Open Forum</li>
                    </ul>
                </div>   
            </div>
        );
    }
}

export default SideNav