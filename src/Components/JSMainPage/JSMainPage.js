import React, { Component } from 'react';
import './JSMainPage.css';

class JSMainPage extends Component {
    render() {
        return (
            <div>
                <div className="jsMainPageContent">
                <div className="introJs">
                 <p > JavaScript is a programming language that allows you to 
                     implement complex things on web pages. Every time a web page
                      does more than just sit there and display static information
                       for you to look at — displaying timely content updates, or interactive maps, 
                     or animated 2D/3D graphics, or scrolling video jukeboxes,
                      and so on — you can bet that JavaScript is probably involved. </p>
                 <div>

                <div className="sectionCardJs">    
                <p className="jshead">Read</p>
                <p> <a  href="https://www.w3schools.com/html/default.asp">W3Schools</a> is a popular web site for learning web technologies online. 
                    It focus on simplicity and straight-forward learning. And bonus point is, it's a completely free developers resource. </p>
                </div>
                
                <div className="sectionCardJs">
                <p className="jshead">Watch Tutorials</p>
                <p>JavaScript is arguably more difficult to learn than related technologies such as HTML and CSS. Before attempting to learn JavaScript, you are strongly advised to get familiar with at least these two technologies first, and perhaps others as well. Start by working through the following modules:
                
                Getting started with the Web
                Introduction to HTML
                Introduction to CSS</p>

                <ul className="learnList">
                <li>Getting started with the Web</li>
                <li>Introduction to HTML</li>
                <li>Introduction to CSS</li>
            </ul>

                    <div className="Iframe">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/qoSksQ4s_hg" frameborder="0" gesture="media" 
                    allow="encrypted-media" allowfullscreen></iframe>

                      <iframe width="560" height="315" src="https://www.youtube.com/embed/cZCq8lQ-vZ0" frameborder="0"
                       gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                       <iframe width="560" height="315" src="https://www.youtube.com/embed/IJWcX2EDAKg" frameborder="0"
                        gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MnaKa7igX7k" frameborder="0"
                         gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                         <iframe width="560" height="315" src="https://www.youtube.com/embed/mNRzWMH5xK0" frameborder="0" 
                         gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                         <iframe width="560" height="315" src="https://www.youtube.com/embed/mNRzWMH5xK0" frameborder="0"
                          gesture="media" allow="encrypted-media" allowfullscreen></iframe>

                          <iframe width="560" height="315" src="https://www.youtube.com/embed/UWdepvkLE8U" frameborder="0"
                          gesture="media" allow="encrypted-media" allowfullscreen></iframe>


                    </div>  
                </div>

                <div className="sectionCardJs">
                <p className="jshead"></p>
                <p></p>
                </div>

            </div>
               
                
                
            </div>
            
            </div>
            </div>
        );
    }
}

export default JSMainPage;