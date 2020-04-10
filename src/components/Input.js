import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div class="row">
        <div className="col-25">
          <label className="label"> {this.props.Label} </label>
        </div>
        <div className="col-75">
          <input type={this.props.type} className="field" required />
        </div>
      </div>
    )
  }
}
