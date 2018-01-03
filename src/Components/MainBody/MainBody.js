import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import HtmlCard from '../HtmlCard/HtmlCard.js';
import CssCard from '../CssCard/CssCard';
import JsCard from '../JsCard/JsCard';

class MainBody extends Component {
    render() {
        return (
            <div>
                <Link to="/html">
                    <RaisedButton label="Html" secondary={true}  />
                </Link>
                <HtmlCard/>
                <CssCard/>
                <JsCard/>
                
            </div>
        );
    }
}

export default MainBody;