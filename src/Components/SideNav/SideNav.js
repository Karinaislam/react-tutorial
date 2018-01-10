import React, { Component } from 'react';
import "./SideNav.css";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router-dom';

const iconStyles = {
    marginRight: 24,
    marginTop:15,
    color:'white'
  };
class SideNav extends Component {


    constructor(props) {
        super(props);
        this.state = {open: false};
      }
    
      handleToggle = () => this.setState({open: !this.state.open});
    
      handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
            <FontIcon className="material-icons" style={iconStyles} onClick={this.handleToggle}>menu</FontIcon>
            <Drawer 
                open={this.state.open} width={300}
                docked={false}
                onRequestChange={(open) => this.setState({open})}
                >
                <div className="drawer">
                </div>
            <MenuItem href="/totalGuide" onClick={this.handleClose}>Total Guide</MenuItem>
               <MenuItem  href="/home" onClick={this.handleClose}> Home</MenuItem> 
                <MenuItem href="/html" onClick={this.handleClose}>HTML</MenuItem>
                <MenuItem href="/css" onClick={this.handleClose}>CSS</MenuItem>
                <MenuItem href="/js" onClick={this.handleClose}>JavaScript</MenuItem>
                <MenuItem href="/home" onClick={this.handleClose}>Blogs</MenuItem>
            </Drawer>
          </div>
            
        );
    }
}

export default SideNav