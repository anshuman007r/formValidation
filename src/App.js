import React, { Component } from 'react';
import Input from './components/Input';
import {FORM_FILEDS} from './utils/Appdata';
import {SIGNUP_ROUTE} from './utils/routeConstants';
import {apiCall} from './utils/fetchHelpers';
import {regexTest,showState} from './utils/Validationregex';
import './App.css';

export default class App extends Component {
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
      status:'',
      data:{},
      flag:false,
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
    }).then((res)=>{this.setState({status:res.status,data:res});});
    this.setState({flag:false});
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
    const {status,flag}=this.state;
    console.log('flag',flag)
    if(status !== '' && status !==undefined && flag!==true )
    {
      this.setState({flag:true});
      const {data}=this.state;
      this.props.checkStatus(status,data);
      
    }
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
