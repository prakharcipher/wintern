import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Person from 'material-ui-icons/Person';
import AssignmentInd from 'material-ui-icons/AssignmentInd';
import Https from 'material-ui-icons/Https';
import FlatButton from 'material-ui/FlatButton';
// import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import {
  BottomNavigation,
  BottomNavigationItem
} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Body from './Body';
import Footer from './Footer';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import TextField from 'material-ui/TextField';

// import FontIcon from 'material-ui/FontIcon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 3,
      open: false
    };
  }

  select = index => this.setState({ selectedIndex: index });

  handleTouchTap = event => {
    // This prevents ghost click.
    // event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <AppBar title="OST Talent" zDepth={2}>
          <FlatButton
            style={{
              color: 'white',
              marginTop: '12px'
            }}
            label="Login"
            onClick={this.handleTouchTap}
            icon={<Person />}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleRequestClose}
            animation={PopoverAnimationVertical}
            styel={{ width: '50px', height: '40px' }}
          >
            <br />
            <TextField hintText="E-mail" />
            <AssignmentInd style={{ color: 'grey' }} />
            <br />
            <TextField hintText="Password" type="password" />
            <Https style={{ color: 'grey' }} />
            <br />
            <RaisedButton
              primary={true}
              label="Login"
              onClick={this.handleRequestClose}
            />
            <br />
          </Popover>
        </AppBar>
        <Paper zDepth={3}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Affiliates"
              icon={<Person />}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="About Us"
              icon={<Person />}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Contact Us"
              icon={<Person />}
              onClick={() => this.select(2)}
            />
            <BottomNavigationItem
              label="Openings"
              icon={<Person />}
              onClick={() => this.select(3)}
            />
            <BottomNavigationItem
              label="Job Registration"
              icon={<Person />}
              onClick={() => this.select(4)}
            />
          </BottomNavigation>
        </Paper>
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
