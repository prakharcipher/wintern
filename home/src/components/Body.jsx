import React, { Component } from 'react';
import gif from './back.gif';
// import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { blue300 } from 'material-ui/styles/colors';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div
        style={{
          height: '750px',
          background: `url(${gif})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <Chip
          backgroundColor={blue300}
          style={{ marginLeft: '44.8%', top: '50%', position: 'absolute' }}
          onClick={this.handleOpen}
        >
          <span style={{ fontSize: '150%' }}>
            <b>Get Started</b>
          </span>
        </Chip>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={{
            width: '90%',
            maxWidth: 'none'
          }}
        >
          <TextField hintText="Country" />
          <TextField hintText="City" />
          <TextField hintText="Domain" />
          <TextField hintText="Experience" />
          <RaisedButton label="Search" primary={true} keyboardFocused={true} />
          <br />
          <br />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Company Name</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
                <TableHeaderColumn>Action</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Bangalore, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Mumbai, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Bangalore, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Pune, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>5</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Delhi, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>6</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Chennai, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>7</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Noida, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>8</TableRowColumn>
                <TableRowColumn>Consulting-Consultant</TableRowColumn>
                <TableRowColumn>Affine Analytics</TableRowColumn>
                <TableRowColumn>Bangalore, India</TableRowColumn>
                <TableRowColumn>
                  <RaisedButton secondary={true} label="Apply Now" />
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Dialog>
      </div>
    );
  }
}

export default Body;
