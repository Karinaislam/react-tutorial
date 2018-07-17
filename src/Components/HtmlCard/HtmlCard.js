import React, { Component } from "react";
import "./HtmlCard.css";
import html5 from "../../images/html5.png";
import RaisedButton from "material-ui/RaisedButton";
import { Link } from "react-router-dom";

class HtmlCard extends Component {
  render() {
    return (
      <div>
        <div className="card1">
          <div className="htmlImageDiv">
            <img className="htmlImage" src={html5} />
          </div>

          <div className="htmlDescriptionDiv">
            <p className="HeadingHtmlCard">HTML</p>
            <p>
              {" "}
              HTML, or HyperText Markup Language, is used to create the basic
              structure of a webpage
            </p>
            <Link to="/html">
              <RaisedButton label="Learn HTML" secondary={true} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HtmlCard;
