import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class JSMainPage extends Component {
    render() {
        return (
            <div>
                <h1> Hi JavaScript!</h1>
                <Link to="/js">JavaScript</Link>
            </div>
        );
    }
}

export default JSMainPage;