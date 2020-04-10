import React, { Component } from 'react';
import Input from './components/Input';
import {FORM_FILEDS} from './utils/Appdata';
import './App.css';

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name:'',
      email:'',
    }
  }

  createField=()=>{
      return FORM_FILEDS.map((item)=>(<Input Label={item.Label} type={item.type}/>))
  }
  render() {
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
