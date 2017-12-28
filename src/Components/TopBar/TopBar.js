import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SideNav from '../SideNav/SideNav';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import "./TopBar.css";


function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};




class TopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render() {
    return (
      <div>
         <AppBar
    title={<span className= "title"style={styles.title}>Front-End Developer Guide</span>}
    onTitleClick={handleClick}
                
    iconElementLeft={<SideNav />}
    
  />
  
      </div>
    );
  }
}

export default TopBar;