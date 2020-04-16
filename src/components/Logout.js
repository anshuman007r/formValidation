import React, { Component } from 'react';
import { withRouter } from "react-router";
import { clearToken,clearName} from '../utils/auth';

class Logout extends Component {
  componentDidMount(){
    clearToken();
    clearName();
    this.props.setName('');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        This is the logout page
      </div>
    )
  }
};

export default withRouter(Logout);
