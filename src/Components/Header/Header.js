import React, { Component } from 'react';
import "./Header.css"
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


const style = {
    margin: 1,
  };




class Header extends Component {

    state = {
        open: false,
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };


    render() {
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
          ];
      
        return (
            <div>
                <div className ="grad">
                    <p className="headLine">Become a Front-End Developer</p>
                    <RaisedButton  onClick={this.handleOpen} className="signUp" label="SignUp" primary={true}  />
                    
                    <Dialog
                        title="New to this website?"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        <TextField hintText="Email"/><br /><br />
                        <TextField hintText="Password"/><br /><br />
                        <FlatButton label="Log In" primary={true} />
                        <FlatButton label="Sign Up" secondary={true} />
                        <FlatButton label="Log Out" disabled={true} />
                    </Dialog>
                           </div>
            </div>
        );
    }
}

export default Header;