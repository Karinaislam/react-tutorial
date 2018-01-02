import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Html extends Component {
    render() {
        return (
            <div>
                <h1> Hi there!</h1>
                <Link to="/html">Html</Link>
            </div>
        );
    }
}

export default Html;