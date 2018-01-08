import React, { Component } from 'react';
import './HtmlQuiz1.css';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import firebase from 'firebase';

const styles = {
    
  margin: 20,
  horizontalAlign: 'middle',
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },

};


class Html extends Component {

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

      handleOpen2 = () => {
        this.setState({open2: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

      displayResult = () =>{
        if(this.state.wrongAnswers.length > 0){
            this.handleOpen();
        }else {
            this.handleOpen2();
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
            <div className="htmlQuiz1MainPage">

           
                
                        
                       
                          <div className="questionContainer"> 
                          <p className="quizHead">HTML Quiz 1</p>

                            <p>1) What is the HTML tag for a link?</p>
                            
                            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleHtmlQues1}>
                                <RadioButton
                                value="link"
                                label="<link>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="ref"
                                label="<ref>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="a"
                                label="<a>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="href"
                                label="<href>"
                                style={styles.radioButton}
                                />

                                </RadioButtonGroup>
            <p>2) What HTML tag changes the tab name of the page in the browser? </p>

            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleHtmlQues2}>
                                <RadioButton
                                value="tab"
                                label="<tab>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="h1"
                                label="<h1>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="title"
                                label="<title>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="head"
                                label="<head>"
                                style={styles.radioButton}
                                />
                                </RadioButtonGroup>
                                <p>3) What is the tag to identify a row inside of a table?</p>

            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleHtmlQues3}>
                                <RadioButton
                                value="tr"
                                label="<tr>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="row"
                                label="<row>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="th"
                                label="<th>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="td"
                                label="<td>"
                                style={styles.radioButton}
                                />
                                </RadioButtonGroup>



                                <p>4) What is the HTML element to place your text in italics? </p>

            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleHtmlQues4}>
                                <RadioButton
                                value="italic"
                                label="<italic>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="slant"
                                label="<slant>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="i"
                                label="<i>"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="m"
                                label="<m>"
                                style={styles.radioButton}
                                />
                                </RadioButtonGroup>


                                <p>5) If you wanted to give certain style to a group of elements, what HTML attribute should you use?</p>

            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={this.handleHtmlQues5}>
                                <RadioButton
                                value="id"
                                label="id"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="name"
                                label="name"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="class"
                                label="class"
                                style={styles.radioButton}
                                />

                                <RadioButton
                                value="style"
                                label="style"
                                style={styles.radioButton}
                                />
                                </RadioButtonGroup>
                    </div>
        <div className="submitButton">            
        <FlatButton label="Cancel" primary={true} onClick={this.handleClose} style={styles}/>
      <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={this.handleSubmit}  style={styles}/> 
      </div>

      <Dialog
         
          title="Worng Answer!!!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>

        <Dialog
         
          title="Congratulations!!!"
          actions={actions}
          modal={false}
          open={this.state.open2}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
                        <footer className="footer"></footer>       
                        </div>
                       
        );
    }
}

export default Html;