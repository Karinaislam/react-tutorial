import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SideNav from '../SideNav/SideNav';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import "./TopBar.css";


// We could include this in the class, much like the handleToggle
// and handleClose below. If it's a behavior specific to this component,
// let's keep it all together.
function handleClick() {
  alert('onClick triggered on the title component');
}

// I'm a fan of using css right in the js like this. Other people prefer
// to use separate style sheets or other approaches. They're all valid,
// and depends on you/your team's coding style and choices.
//
// I would caution against using two different approaches though, especially
// because with inline styles vs. css you can run into trouble with css specificity,
// making cascades harder to control or when you need to overwrite something further
// down the line.
const styles = {
  title: {
    cursor: 'pointer',
  },
};

// It's not programmatically important, but inconsistent indentation and
// spacing makes a file harder to read. Think about what pieces of code
// are related to each other and space accordingly, it helps keep concepts
// organized.
class TopBar extends Component {
  constructor(props) {
    super(props);
    // Does the state get used anywhere? I'm not sure if I see where it's going,
    // if it isn't being used, we can remove it and turn this component into
    // a stateless functional component! ^_^
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


  render() {
    return (
      <div className="topBar">
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
