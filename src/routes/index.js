import React,{Component} from "react";
// import { PropTypes } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { withRouter } from "react-router";
import Login from './../components/Login';
import Home from './../components/Home';
import About from './../components/About';
import Logout from './../components/Logout';
import SignUp from '../App';
import ProtectedRoute from './ProtectedRoute';
import {getToken} from '../utils/auth';
import '../App.css';

class App extends Component {
  state={
    firstName: '',
    lastName: '',
    tokenStatus:false,
  }

  setName = (firstName) => {
    this.setState({firstName});

  }
  render() {
    const {firstName}=this.state; 
    return (
      <Router>
        <div >
          
          <ul className="header">
            <li>
              <Link className="linkTag" to="/">Home</Link>
            </li>
            <li>
              <Link className="linkTag" to="/about">About</Link>
            </li>
            {firstName===''?
            (<show>
                <li>
                  <Link className="linkTag" to="/signup">Signup</Link>
                </li>
                <li>
                  <Link className="linkTag" to="/login">Login</Link>
                </li>
            </show>):
            (<show >
                <li>
                  <Link className="linkTag" to="/name">Hi {firstName}</Link>
                </li>
                <li>
                  <Link className="linkTag" to="/logout">Logout</Link>
                </li>
            </show>)}
          </ul>
          </div>
  
          <Switch>
            <Route path="/logout">
              <Logout setName={this.setName}/>
            </Route>
            <Route exact path="/" component={Home}/>
             <Route path="/about">
             {getToken() ? (<About />):(<Redirect from="/about" to="/login"/>)}
            </Route> 
            {/* <ProtectedRoute path='/about' component={About} /> */}
            <Route path="/signup">
              {getToken() ?(<Redirect from="/signup" to="/about"/>) : (<SignUp />)}
            </Route> 
            <Route path="/login">
              {getToken()? (<Redirect from="/login" to="/about"/>) : (<Login setName={this.setName} />)}
            </Route>
          </Switch>
      </Router>
    );
  }
};

export default withRouter(App);

