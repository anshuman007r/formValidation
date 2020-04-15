import React, { Component } from 'react'
import { Redirect, Route } from "react-router-dom";
import {getToken} from '../utils/auth';

export default class ProtectedRoute extends Component {
  render() {
    const {component: Component, ...rest} = this.props;
    return (
      <Route {...rest} render={(props) => (
        getToken() ? (<Component {...props} />) : 
           (<Redirect to='/login' />)   
     )} />
    )
  }
}