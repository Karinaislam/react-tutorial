import React, { Component } from 'react';
import "./SideNav.css";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

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
                    className="drawer"
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    >
                                
                    <MenuItem  onClick={this.handleClose}>Tutorials</MenuItem>
                    <MenuItem onClick={this.handleClose}>Blogs</MenuItem>
                    <MenuItem onClick={this.handleClose}>Podcast</MenuItem>
                    <MenuItem onClick={this.handleClose}>Open Forum</MenuItem>
                </Drawer>
                  
            </div>
        );
    }
}

export default SideNav