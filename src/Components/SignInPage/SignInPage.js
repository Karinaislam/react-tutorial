import React, { Component } from 'react';
import "./SignInPage.css";
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
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



class SignInPage extends Component {

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

      goToHomePage = () => {
        
        this.props.history.push("/home");
        this.logUserLogin();
      }

      logUserLogin = () =>{
        const loggedInd = new Date().toString();
        firebase.database().ref('login').set({
            username: this.state.userName,
            email: this.state.userEmail,
            loggedIn:loggedInd
        }).catch(function(error){
            console.log('error happened', error);
        });
      }

      authGoogle = () =>{
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
            });

            that.goToHomePage();
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            
          });
      }


      authGitHub= () =>{
        const that = this;
        this.setState({open:false});
        const provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            console.log('getting there');
            // The signed-in user info.
            var user = result.user;

            console.log(token, user.displayName, user.email, user.emailVerified);
            that.setState({
                userName: user.displayName,
                userEmail:user.email, 
                userToken:user.uid
            });
           
            that.goToHomePage();

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
            });
            
            that.goToHomePage();

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
        return (
            <div className="signInPage">
                <div>
                <p className="headline"> Sign In</p>
                </div>
<div className="authButtons">

                        
<FlatButton label="Google" onClick={this.authGoogle} primary={true} labelStyle= { {fontWeight: 600,fontSize: 18,  }} style= {{ margin: 10, }} />
<FlatButton label="GitHub" onClick={this.authGitHub} primary={true} labelStyle= { {fontWeight: 600,fontSize: 18,  }} style= {{ margin: 10, }}  />
<FlatButton label="Twitter" onClick={this.authTwitter} primary={true} labelStyle= { {fontWeight: 600,fontSize: 18,  }}  style= {{ margin: 10, }}  />
          

</div>

                
            </div>
        );
    }
}

export default SignInPage;