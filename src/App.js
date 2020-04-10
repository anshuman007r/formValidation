import React, { Component } from 'react';
import Input from './components/Input';
import {FORM_FILEDS} from './utils/Appdata';
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
    console.log(name,showState[name]);
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
    // console.log(this.state);
    return (
      <div className="formPage">
        <form className="form">
          {this.createField()}
          <div className="submitButton">
            <span>
              {this.state.buttonState?
              (<button type="submit">submit </button>):(<button type="submit" disabled>submit </button>)}
            </span> 
            <span><button type="reset">reset </button></span>
          </div>
        </form> 
      </div>
    )
  }
}
