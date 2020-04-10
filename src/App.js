import React, { Component } from 'react';
import Input from './components/Input';
import {FORM_FILEDS} from './utils/Appdata';
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
    }
  }

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  createField=()=>{
      return FORM_FILEDS.map((item)=>(
      <Input Label={item.Label} name={item.name} onChange={this.handleInput} type={item.type} key={item.id}/>
      ))
  }
  render() {
    // console.log(this.state);
    return (
      <div className="formPage">
        <form className="form">
          {this.createField()}
          <div className="submitButton">
            <span><button type="submit">submit </button></span> 
            <span><button type="reset">reset </button></span>
          </div>
        </form> 
      </div>
    )
  }
}
