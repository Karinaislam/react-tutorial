import React, { Component } from 'react';
import './JsCard.css';
import css3 from '../../images/js.png';
import RaisedButton from 'material-ui/RaisedButton';
// import {Link} from 'react-router-dom';

class JsCard extends Component {
    render() {
        return (
            <div>
                 <div className='card3'>
                 
                <div className="jsImageDiv">
                <img  className="jsImage" src={css3}/>
                </div>

                <div className="jsDescriptionDiv">
                    <p className="HeadingJsCard">JavaScript</p>
                    <p>JavaScript is used to define the interactive 
                        elements of a webpage that help to engage users</p>
                        {/* <Link to="/html"> */}
                    <RaisedButton label="Learn JavaScript" secondary={true}  />
                {/* </Link> */}
                </div>

                
                </div>   
            </div>
        );
    }
}

export default JsCard; 

              