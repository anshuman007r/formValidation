import React, { Component } from 'react';
import { withRouter } from "react-router";
import { clearToken } from '../utils/auth';

class Logout extends Component {

  logout = () => {
    clearToken();
    this.props.setName('');
    this.props.history.push('/login');
  }
  render() {
    return (
             <div>
               {this.logout()}
             </div>
    )
  }
};

export default withRouter(Logout);
