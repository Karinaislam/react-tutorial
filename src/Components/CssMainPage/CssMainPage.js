import React, { Component } from 'react';
import './CssMainPage.css';

class CssMainPage extends Component {
    render() {
        return (
            <div>
                <div className="cssMainPageContent">
                <div className="introCss">
                 <p > CSS (Cascading Style Sheets) allows you to create great looking web pages. 
                     S0, let's learn how does it work under the hood. </p>
                 <div>

                <div className="sectionCardCss">    
                <p className="htmlhead">Read</p>
                <p> <a  href="https://www.w3schools.com/html/default.asp">W3Schools</a> is a popular web site for learning web technologies online. 
                    It focus on simplicity and straight-forward learning. And bonus point is, it's a completely free developers resource. </p>
                </div>
                
                <div className="sectionCard">
                <p className="htmlhead">Watch Tutorials</p>
                <p>The biggest key to understanding CSS is understanding selectors. Selectors are what allows you
                      to target specific HTML elements and apply style to them. Learn CSS to develop your website in simple and
                     easy steps starting from basic to advanced concepts with examples including  colors, layout, and fonts etc.</p>
                    <div className="Iframe">
                     <iframe  width="560" height="315" src="https://www.youtube.com/embed/Y1BlT4_c_SU" frameborder="0"
                      gesture="media" allow="encrypted-media" allowfullscreen></iframe>

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

export default CssMainPage;