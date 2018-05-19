import React, { Component } from 'react';
import './CssMainPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import firebase from 'firebase';
import {Link} from 'react-router-dom';


const styles = {
    margin: 12,
    horizontalAlign: 'middle',
    block: {
      maxWidth: 250,
    },
    radioButton: {
      marginBottom: 16,
    },
  
  };
  

class CssMainPage extends Component {

    state = {
        open: false,
        q1Answer:undefined,
        q2Answer:undefined,
        q3Answer:undefined,
        q4Answer:undefined,
        q5Answer:undefined,
        wrongAnswers: false
      };
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

      displayResult = () =>{
          console.log(this.state.wrongAnswers);
        if(this.state.wrongAnswers.length > 0){
            console.log(this.state.wrongAnswers);
        }else {
            console.log('congratulate');
        }
      }

      handleSubmit =() =>{
        var database = firebase.database();
        var userId = firebase.auth().currentUser.uid;
        var that = this;
        return firebase.database().ref('/answers/').once('value').then(function(snapshot) {
          var answers  = snapshot.val();
          var wrongAnswers = [];
          for(var i = 1; i <=5; i++){
              if(answers['q'+i] != that.state['q'+i+'Answer']){
                 wrongAnswers.push(i);
              }
          }
          that.setState({
              wrongAnswers: wrongAnswers
          });
          that.displayResult();
        });
      }

      handleHtmlQues1 = (e,value) => 
      {
        this.setState({
            q1Answer: value
        });
      
      };

      handleHtmlQues2 = (e,value) => 
      {
          this.setState({
              q2Answer: value
          });
      
      };

      handleHtmlQues3 = (e,value) => 
      {
        this.setState({
            q3Answer: value
        });
      
      };

      handleHtmlQues4 = (e,value) => 
      {
        this.setState({
            q4Answer: value
        });
      
      };

      handleHtmlQues5 = (e,value) => 
      {
        this.setState({
            q5Answer: value
        });
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
            onClick={this.handleSubmit}
          />,
        ];

        return (
            <div>
                <div className="cssMainPageContent">
                <div className="introCss">
                <p className="htmlhead">Start Learning CSS </p>
                 <p > CSS (Cascading Style Sheets) allows you to create great looking web pages. 
                     S0, let's learn how does it work under the hood. </p>
                 <div>

                <div className="sectionCardCss">    
                <p className="htmlhead">Step 1: Read</p>
                <p> <a  href="https://www.w3schools.com/html/default.asp">W3Schools</a> is a popular web site for learning web technologies online. 
                    It focus on simplicity and straight-forward learning. And bonus point is, it's a completely free developers resource. </p>
                </div>
                
                <div className="sectionCard">
                <p className="htmlhead">Step 2: Watch Tutorials</p>
                <p>The biggest key to understanding CSS is understanding selectors. Selectors are what allows you
                      to target specific HTML elements and apply style to them. Learn CSS to develop your website in simple and
                     easy steps starting from basic to advanced concepts with examples including  colors, layout, and fonts etc.</p>
                     
                     <p>First, Complete this 1 hour basic CSS crash course to have a kickass start.</p>
                     

                <div className="Iframe">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/yfoY53QXEnI" frameborder="0" 
                gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                <p> Now, Give a small quize of 5 questions and check your learing level.</p>

                

                <div>
                <Link to="/htmlQuiz1">
                <div className="button"><RaisedButton className="quiz" label="Quiz" primary={true}  onClick={this.handleOpen} /></div>
                </Link>
                
                        
                </div>
                




                <p>Second, Complete this <a href="https://www.youtube.com/watch?v=I9XRrlOOazo">tutorials</a> to tone up your basic knowledge.</p>
<div className="tuitorials_block">
    
                <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/I9XRrlOOazo" frameborder="0" 
                gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                <iframe className="iframe"  width="560" height="315" src="https://www.youtube.com/embed/7ZXsPj43heo" frameborder="0" 
                gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                <iframe className="iframe"  width="560" height="315" src="https://www.youtube.com/embed/Y8zMYaD1bz0" frameborder="0" 
                gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/jgw82b5Y2MU" frameborder="0" 
                gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/B9OZkATMbag" frameborder="0" 
                 gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                 <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/x7tLPhnA06w" frameborder="0"
                  gesture="media" allow="encrypted-media" allowfullscreen></iframe>

</div>

                <p> Now, Give a small quize of 5 questions and check your learing level.</p>                          

                <RaisedButton className="quiz button" label="Quiz" primary={true} />

                <div className="sectionCard">
                <p className="htmlhead">Step 3: Learn Framework</p>

                <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/5GcQtLDGXy8" frameborder="0"
                 gesture="media" allow="encrypted-media" allowfullscreen></iframe>

              
                 <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/B9OZkATMbag" frameborder="0"
                  allow="autoplay; encrypted-media" allowfullscreen></iframe>

                  <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/x7tLPhnA06w" frameborder="0" 
                  allow="autoplay; encrypted-media" allowfullscreen></iframe>

                


                </div>  
                    </div>  
                </div>

                

                <p></p>
                </div>

            </div>
               
                
                
            </div>
            
            
            </div>
        );
    }
}

export default CssMainPage;