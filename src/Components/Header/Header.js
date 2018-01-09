import React, { Component } from 'react';
import "./Header.css";
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import firebase from 'firebase';
import FontIcon from 'material-ui/FontIcon';






class Header extends Component {


    render() {
    
      
        return (
            <div>
                <div className ="grad">
                    <p className="headLine">Become a Front-End Developer</p>
                    {/* <p>{this.state.userName}</p> */}
                   
                    </div>  
            </div>
        );
    }
}

export default Header;