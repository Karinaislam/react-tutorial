import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CssMainPage extends Component {
    render() {
        return (
            <div>
                <h1> Hi CSS!</h1>
                <Link to="/css">CSS</Link>
            </div>
        );
    }
}

export default CssMainPage;