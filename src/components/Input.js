import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-25">
          <label className="label"> {this.props.Label} </label>
        </div>
        <div className="col-75">
          <input 
            name={this.props.name} 
            type={this.props.type} 
            onChange={this.props.onChange} 
            className="field" 
            required
          />
        </div>
      </div>
    )
  }
}
