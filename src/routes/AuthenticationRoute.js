import React, { Component } from 'react'
import { Redirect, Route } from "react-router-dom";
import {getToken} from '../utils/auth';

export default class AuthenticationRoute extends Component {
    render() {
        const {component: Component, ...rest} = this.props;
        const token=getToken()==='undefined'?false:getToken();
        return (
          <Route {...rest} render={(props) => (
    
            token?(<Redirect to='/' />):(<Component {...props} />) 
       
         )} />)
    }
}
