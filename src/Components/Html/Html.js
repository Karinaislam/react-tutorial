import React, { Component } from 'react';
import './Html.css';


class Html extends Component {
    render() {
        return (
            <div>
                <div className="htmlMainPageContent">
                    <div className="intro">
                     <p > The first step in anyone’s web coding journey is to learn HTML.
                     Starting to learn HTML doesn’t need to be expensive or scary. 
                     The best way to learn Front-end Web technologies is- </p>
                     <ul className="learnList">
                         <li> Read a authenticated document</li>
                         <li>Watch a couple of tutorials</li>
                         <li>Finally practice (do some ) hands on project to achieve the pro level</li>
                     </ul>

                     <div>

                    <div className="sectionCard">    
                    <p className="htmlhead">Read</p>
                    <p> <a  href="https://www.w3schools.com/html/default.asp">W3Schools</a> is a popular web site for learning web technologies online. 
                        It focus on simplicity and straight-forward learning. And bonus point is, it's a completely free developers resource. </p>
                    </div>
                    
                    <div className="sectionCard">
                    <p className="htmlhead">Watch Tutorials</p>
                    <p>Learn HTML to develop your website in simple and
                         easy steps starting from basic to advanced concepts with examples including 
                         overview, basic tags, meta tags, attributes, formatting, phrase tags, comments, fonts, marquees, images,
                         links, tables, frames, lists, layouts, colors, forms etc.</p>
                        <div className="Iframe">
                         <center><iframe  width="560" height="315" src="https://www.youtube.com/embed/Y1BlT4_c_SU" frameborder="0"
                          gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>
                        </div>  
                    </div>

                    <div className="sectionCard">
                    <p className="htmlhead"></p>
                    <p></p>
                    </div>

                </div>
                   
                    
                    
                </div>
                
                </div>
            </div>
        );
    }
}

export default Html;