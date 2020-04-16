import React,{Component} from "react";
import { withRouter } from "react-router";
import Login from './../components/Login';
import Home from './../components/Home';
import About from './../components/About';
import Logout from './../components/Logout';
import SignUp from '../App';
import Header from '../components/Header';
import ProtectedRoute from './ProtectedRoute';
import {getToken,getName} from '../utils/auth';
// import {apiCall} from '../utils/fetchHelpers';
// import {VERIFY_TOKEN_ROUTE} from '../utils/routeConstants';
import '../App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {Services} from '../components/Services';

class App extends Component {
  state={
    firstName: '',
  }
  
  componentDidMount(){
    // const token = getToken();
    // if(!this.state.firstName && token){
    //   apiCall(VERIFY_TOKEN_ROUTE, {
    //     method: 'GET',
    //     credentials: true,
    //   }).then((res) => {
    //     this.setState({firstName: res.firstName});
    //     this.props.history.push('/');
    //   })
    // }
    this.setState({firstName:getName()})
  }

  setName = (firstName) => {
    this.setState({firstName});

  }
  render() {
    const {firstName}=this.state; 
    return (
      <Router>
        <Header firstName={firstName}/>
        <Switch>
          <Route path="/logout">
            <Logout setName={this.setName}/>
          </Route>
          <Route exact path="/" component={Home}/>
          <ProtectedRoute path='/about' component={About} />
          <ProtectedRoute path='/testPrivate' component={Services} />
          <Route path="/signup">
            {getToken() ?(<Redirect from="/signup" to="/about"/>) : (<SignUp />)}
          </Route> 
          <Route path="/login">
            {getToken()? (<Redirect from="/login" to="/about"/>) : (<Login setName={this.setName}/>)}
          </Route>
        </Switch>
      </Router>
    );
  }
};

export default withRouter(App);

