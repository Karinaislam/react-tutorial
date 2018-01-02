import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';

class MainBody extends Component {
    render() {
        return (
            <div>
                <Link to="/html">
                    <RaisedButton label="Html" secondary={true}  />
                </Link>
                
                
            </div>
        );
    }
}

export default MainBody;