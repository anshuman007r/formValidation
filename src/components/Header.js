import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {getName} from '../utils/auth';
export default class Header extends Component {
  render() {
    return (
      <div > 
        <ul className="header">
          <li>
            <Link className="linkTag" to="/">Home</Link>
          </li>
          <li>
            <Link className="linkTag" to="/testPrivate">Services</Link>
          </li>
          {getName()?
            (<>
                <li>
                  <Link className="linkTag" to="/about">About</Link>
                </li>
                <li>
                  <Link className="linkTag" to="/name">Hi {getName()}</Link>
                </li>
                <li>
                  <Link className="linkTag" to="/logout">Logout</Link>
                </li>
            </>):
            (<>
              <li>
                <Link className="linkTag" to="/signup">Signup</Link>
              </li>
              <li>
                <Link className="linkTag" to="/login">Login</Link>
              </li>
          </>)
          }
        </ul>
      </div>
    )
  }
}
