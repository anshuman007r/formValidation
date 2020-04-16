import React, { Component } from 'react';
import Input from './Input';
import {FORM_FILEDS} from '../utils/Appdata'
import {LOGIN_ROUTE} from '../utils/routeConstants';
import {apiCall} from '../utils/fetchHelpers';
import {regexTest,showState} from '../utils/Validationregex';
import {setToken,setName} from '../utils/auth';
import { withRouter } from "react-router";
import '../App.css';

 class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      buttonState:false,
      email:'',
      password:'',
      checkValid: false,
    }
  }
    
  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});

    if(this.state.checkValid){
      this.checkValidation(event);
    }
  }

  checkValidation=(event)=>{
    const {name,value} = event.target;
    showState[name]=regexTest[name].test(value)? false:true;
    let checkValid=showState[name]?true:false;
    this.setState({checkValid});
    if(!checkValid){
        this.setState({buttonState:true});
      }
  }
  
  submitForm = (e) => {
    e.preventDefault();
    apiCall(LOGIN_ROUTE, {
      method: 'POST',
      bodyData: {
        email: this.state.email,
        password: this.state.password,
      }
    }).then((res)=>{
       setToken(res.token)
       setName(res.firstName)
       this.props.history.push('/');

    });
  }

  createField=()=>{
    const fields=FORM_FILEDS.filter((item)=>{
      return (item.name === 'email' || item.name === 'password' )
    });
    return fields.map((item)=>(
      <Input 
        Label={item.Label} 
        showState={showState[item.name]} 
        error={item.error} name={item.name} 
        onChange={this.handleInput} 
        type={item.type}
        onBlur={this.checkValidation} 
        key={item.id}
      />
    ))
  }

  render() {
    const { buttonState } = this.state;
    return (
      <div className="formPage">
        <div className="formTitle">Login</div>
        <form className="form">
          {this.createField()}
          <div className="submitButton">
            <span>
              <button type="submit" disabled={!buttonState} onClick={this.submitForm}>Login </button>
            </span> 
            <span><button type="reset">reset </button></span>
          </div>
        </form> 
      </div>
    )
  }
}

export default withRouter(Login);