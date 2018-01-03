import React, { Component } from 'react';
import './CssCard.css';
import css3 from '../../images/css3.png';
import RaisedButton from 'material-ui/RaisedButton';
// import {Link} from 'react-router-dom';

class CssCard extends Component {
    render() {
        return (
            <div>
                <div className='card2'>

                <div className="cssImageDiv">
                <img  className="cssImage" src={css3}/>
                </div>

                <div className="cssDescriptionDiv">
                    <p className="HeadingCssCard">CSS</p>
                    <p>CSS, or Cascading Style Sheets, is used for the design of
                         a webpage – where everything is placed and how it looks</p>
                         {/* <Link to="/html"> */}
                    <RaisedButton label="Learn CSS" secondary={true}  />
                {/* </Link> */}
                </div>

                
                </div>
            </div>
        );
    }
}

export default CssCard;