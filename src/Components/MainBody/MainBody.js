import React, { Component } from 'react';

import HtmlCard from '../HtmlCard/HtmlCard.js';
import CssCard from '../CssCard/CssCard';
import JsCard from '../JsCard/JsCard';

class MainBody extends Component {
    render() {
        return (
            <div>
                
                <HtmlCard/>
                <CssCard/>
                <JsCard/>
                
            </div>
        );
    }
}

export default MainBody;