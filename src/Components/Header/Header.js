import React, { Component } from 'react';
import "./Header.css";
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import firebase from 'firebase';
import FontIcon from 'material-ui/FontIcon';

const styles = {
    margin: 1,
    

    button: {
        margin: 12,
        
      },
      exampleImageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
  };




class Header extends Component {

    state = {
        open: false,
        userName: '',
        userEmail: '',
        userToken: ''        
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

      authGoogle = () =>{
        console.log('inside111');
        const that = this;
        this.setState({open:false});
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(token, user.displayName, user.email, user.emailVerified);
            that.setState({
                userName: user.displayName,
                userEmail:user.email, 
                userToken:user.uid
            })
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            
          });
      }


      authGitHub= () =>{
        console.log('inside');
        const that = this;
        this.setState({open:false});
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            console.log('getting there');
            // The signed-in user info.
            var user = result.user;
            console.log(user, 'inside github');
            that.setState({
                userName: user.displayName,
                userEmail:user.email, 
                userToken:user.uid
            })
            // ...
          }).catch(function(error) {
            console.log('github error', error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

      }

      authTwitter = () =>{
        const that = this;
        this.setState({open:false});
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            that.setState({
                userName: user.displayName,
                userEmail:user.email, 
                userToken:user.uid
            })
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            console.log('twitter error', error);
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }


     




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
                    <p>{this.state.userName}</p>
                    <RaisedButton  onClick={this.handleOpen} className="signUp" label="SignUp" primary={true}  />
                    
                    <Dialog
                        title="Sign In"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        titleStyle={{textAlign: "center"}}
                    >
                    <div className="authButtons">
                        
                        <FlatButton label="Google" onClick={this.authGoogle} primary={true} />
                        <FlatButton label="GitHub" onClick={this.authGitHub} primary={true} />
                        <FlatButton label="Twitter" onClick={this.authTwitter} secondary={true} />
                        <RaisedButton
                            href="https://github.com/callemall/material-ui"
                            target="_blank"
                            label="Github Link"
                            primary={true}
                            style={styles.button}
                            icon={<FontIcon className="material-icons"> </FontIcon>}
                            />
                        </div>
                    </Dialog>
                           </div>
            </div>
        );
    }
}

export default Header;