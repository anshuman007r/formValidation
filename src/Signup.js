import React, { Component } from 'react';
import Input from './components/Input';
import {FORM_FILEDS} from './utils/Appdata';
import {SIGNUP_ROUTE} from './utils/routeConstants';
import {apiCall} from './utils/fetchHelpers';
import {regexTest,showState} from './utils/Validationregex';
import './App.css';
import { setToken,setName} from './utils/auth';
import { withRouter } from "react-router";

 class Signup extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      buttonState:false,
      checkValid:false,
    }
  }

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});
    if(this.state.checkValid)
    {
      this.checkValidation(event);
    }
  }

  checkValidation=(event)=>{
    const {name,value} = event.target;
    showState[name]=regexTest[name].test(value)? false:true;
    let checkValid=showState[name]?true:false;
    this.setState({checkValid});
    if(name ==='confirmPassword')
    {
      showState[name]=(this.state.password === this.state.confirmPassword)? false:true;
      let checkValid=showState[name]?true:false;
      this.setState({checkValid});

      if(!checkValid)
      {
        this.setState({buttonState:true});
      }
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    apiCall(SIGNUP_ROUTE, {
      method: 'POST',
      bodyData: {
        email: this.state.email,
        password: this.state.password,
        firstName:this.state.firstName,
        lastName:this.state.lastName,
      }
    }).then((res)=>{
      setToken(res.token)
      setName(res.firstName)
      res.token!==undefined?this.props.history.push('/'):this.props.history.push('/signup');
    });
  }

  createField=()=>{
      return FORM_FILEDS.map((item)=>(
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
    const {buttonState} = this.state;
    return (
      <div className="formPage">
        <div className="formTitle">Sign up</div>
        <form className="form">
          {this.createField()}
          <div className="submitButton">
            <span>
              <button type="submit" disabled={!buttonState} onClick={this.submitForm}>submit </button>
            </span> 
            <span><button type="reset">reset </button></span>
          </div>
        </form> 
      </div>
    )
  }
}
export default withRouter(Signup);
