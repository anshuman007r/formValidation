import React, { Component } from 'react';
import Input from './Input';
import {FORM_FILEDS} from '../utils/Appdata'
import {LOGIN_ROUTE} from '../utils/routeConstants';
import {apiCall} from '../utils/fetchHelpers';
import {regexTest,showState} from '../utils/Validationregex';
import '../App.css';
export default class Login extends Component {
    constructor(props)
    {
       super(props);
       this.state={
           buttonState:false,
           email:'',
           password:'',
           data:{},
           status:'',
           flag:0,

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
    if(!checkValid)
      {
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
    // }).then((res)=>{console.log(res)});
    }).then((res)=>{this.setState({status:res.status,data:res});});
    this.setState({flag:false});
  
  }
    createField=()=>{
            const fields=FORM_FILEDS.filter((item)=>{return (item.name === 'email' || item.name === 'password' )});
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
      const {status,flag}=this.state;
      console.log('flag',flag)
      if(status !== '' && status !==undefined && flag!==true )
      {
        this.setState({flag:true});
        const {data}=this.state;
        this.props.checkStatus(status,data);
        
      }
      const {buttonState}=this.state
        return (
            <div>
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
            </div>
        )
    }
}
