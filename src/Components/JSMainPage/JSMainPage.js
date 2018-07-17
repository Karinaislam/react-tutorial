import React, { Component } from "react";
import "./JSMainPage.css";
import RaisedButton from "material-ui/RaisedButton";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import firebase from "firebase";
import { Link } from "react-router-dom";

const styles = {
  margin: 12,
  horizontalAlign: "middle",
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

class JSMainPage extends Component {
  state = {
    open: false,
    q1Answer: undefined,
    q2Answer: undefined,
    q3Answer: undefined,
    q4Answer: undefined,
    q5Answer: undefined,
    wrongAnswers: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  displayResult = () => {
    if (this.state.wrongAnswers.length > 0) {
      this.handleOpen();
    } else {
      this.handleOpen2();
    }
  };

  handleSubmit = () => {
    var database = firebase.database();
    var userId = firebase.auth().currentUser.uid;
    var that = this;
    return firebase
      .database()
      .ref("/answers/")
      .once("value")
      .then(function(snapshot) {
        var answers = snapshot.val();
        var wrongAnswers = [];
        for (var i = 1; i <= 5; i++) {
          if (answers["q" + i] != that.state["q" + i + "Answer"]) {
            wrongAnswers.push(i);
          }
        }
        that.setState({
          wrongAnswers: wrongAnswers
        });
        that.displayResult();
      });
  };

  handleHtmlQues1 = (e, value) => {
    this.setState({
      q1Answer: value
    });
  };

  handleHtmlQues2 = (e, value) => {
    this.setState({
      q2Answer: value
    });
  };

  handleHtmlQues3 = (e, value) => {
    this.setState({
      q3Answer: value
    });
  };

  handleHtmlQues4 = (e, value) => {
    this.setState({
      q4Answer: value
    });
  };

  handleHtmlQues5 = (e, value) => {
    this.setState({
      q5Answer: value
    });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];

    return (
      <div>
        <div className="jsMainPageContent">
          <div className="introJs">
            <p className="jshead">Start Learning JavaScript</p>
            <p>
              {" "}
              JavaScript is a programming language that allows you to implement
              complex things on web pages. Every time a web page does more than
              just sit there and display static information for you to look at —
              displaying timely content updates, or interactive maps, or
              animated 2D/3D graphics, or scrolling video jukeboxes, and so on —
              you can bet that JavaScript is probably involved.{" "}
            </p>
            <div>
              <div className="sectionCardJs">
                <p className="jshead">Step 1: Read</p>
                <p>
                  {" "}
                  <a href="https://www.w3schools.com/html/default.asp">
                    W3Schools
                  </a>{" "}
                  is a popular web site for learning web technologies online. It
                  focus on simplicity and straight-forward learning. And bonus
                  point is, it's a completely free developers resource.{" "}
                </p>
              </div>

              <div className="sectionCardJs">
                <p className="jshead"> Step 2: Watch Tutorials</p>
                <p>
                  JavaScript is arguably more difficult to learn than related
                  technologies such as HTML and CSS. Before attempting to learn
                  JavaScript, you are strongly advised to get familiar with at
                  least these two technologies first, and perhaps others as
                  well. Start by working through the following modules:{" "}
                </p>
                <ul>
                  <li>Getting started with the Web</li>
                  <li> Introduction to HTML</li>
                  <li> Introduction to CSS</li>
                </ul>

                <div className="Iframe">
                  <p>
                    First, Complete this 1 hour basic HTML crash course to have
                    a kickass start.
                  </p>

                  <div className="Iframe">
                    <div>
                      <iframe
                        className="iframe"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vEROU2XtPR8"
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                      />

                      <iframe
                        className="iframe"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/2LeqilIw-28"
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                      />
                    </div>

                    <p>
                      {" "}
                      Now, Give a small quize of 5 questions and check your
                      learing level.
                    </p>

                    <div>
                      <Link to="/htmlQuiz1">
                        <RaisedButton
                          className="quiz"
                          label="Quiz"
                          primary={true}
                          onClick={this.handleOpen}
                        />
                      </Link>
                    </div>

                    <p>
                      Second, Complete this{" "}
                      <a href="https://www.youtube.com/watch?v=Y1BlT4_c_SU&list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc">
                        17 tutorials
                      </a>{" "}
                      to tone up your basic knowledge.
                    </p>

                    <div>
                      <iframe
                        className="iframe"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/qoSksQ4s_hg"
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                      />

                      <iframe
                        className="iframe"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/0Mp2kwE8xY0"
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                      />

                      <iframe
                        className="iframe"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ANDyf6VEYHE"
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                      />

                      <iframe
                        className="iframe"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/FIORjGvT0kk"
                        frameborder="0"
                        gesture="media"
                        allow="encrypted-media"
                        allowfullscreen
                      />
                    </div>
                    <p>
                      Now, Give a small quize of 5 questions and check your
                      learing level.
                    </p>

                    <RaisedButton
                      className="quiz"
                      label="Quiz"
                      primary={true}
                    />
                  </div>
                </div>

                <div className="sectionCard">
                  <p className="htmlhead" />
                  <p />
                </div>
              </div>
            </div>

            <div className="sectionCardJs">
              <p className="jshead" />
              <p />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JSMainPage;
