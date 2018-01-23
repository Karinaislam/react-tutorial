import React, { Component } from 'react';
import './TotalGuide.css';

class TotalGuide extends Component {
    render() {
        return (
            <div>
                <div className="totalMainPg">

                <div className= "introTotal" >
                    <p className="totalHead"> The Total Guide For To Be a Front-end Developer </p>

                    <div className="flexBox">
                        <div className="flexContainer">
                        <p className="totalHead">Main Technologies</p>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>CSS Frameworks</li>
                            <li>JS Frameworks</li>
                            <li>Serverside Language</li>
                            <li>Database</li>
                            <li>Miscellaneous</li>
                        </ul>
                        </div>
                        <div className="flexContainer">
                        <p className="totalHead"> Side Technologies</p>
                        <ul>
                                <li>Git/GitHub</li>
                                <li>DevTool</li>
                                <li>Basic Command Line</li>
                                <li>API</li>
                                <li>DOM Manupulation</li>
                                <li>Miscellaneous</li>
                        </ul>
                        </div>
                    </div>

                    <p className="totalHead"> Detail Descriptions</p>
                    <p className="totalHead"> HTML5...............</p>
                    <p>Tags, Attributes, Tables,Forms, FilePath, Iframe, Media</p>
                    <p className="totalHead"> CSS3</p>
                    <p>Syntax, BoxModel, Advance CSS, CSS animations, Flexbox, Media Queries, CSS Grid layout, CSS class</p>
                    <p className="totalHead"> JavaScript</p>
                    <p >Data Types, Math, Random, Date,Switch, For loop, While loop, Functions, Object Oriented programming, Functional Programming, DOM Manupulation, API, JSON, AJAX, ES2015, Arrow Function, Promise, Templete String</p>
                    <p className="totalHead"> CSS Frameworks</p>
                    <p> Bootstrap 4, Material UI, Material Design Lite</p>
                    <p className="totalHead"> JS Frameworks</p>
                    <p >React, Angular</p>
                    <p className="totalHead">Miscellaneous</p>
                    <p >Best Practice, Debugging, Interview Questions, Unit Test, WebPack, Type Script, SCSS, Data URI</p>
                    
                </div>
                </div>
            </div>
        );
    }
}

export default TotalGuide;