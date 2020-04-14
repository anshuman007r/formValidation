import React,{Component} from "react";
// import { PropTypes } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from './../components/Login';
import SignUp from '../App';
import '../App.css';
function Home() {
      return (
      <div>
        <div className="leftPannel">
          <div className="left">

            <div className="question">
                What is Lorem Ipsum?
            </div>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum.

          </div>
        </div>

        <div className="rightPannel">
          <div className="right">

            <div className="question">
               Why do we use it?
            </div>

            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
            making it look like readable English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).

          </div>
        </div>

      </div>
      )
  }
  

export default class App extends Component {
  constructor(props)
  {
    super(props);
    this.checkStatus=this.checkStatus.bind(this);
    this.state={
         status:'',
         data:{},
         statusState:false,


    };
  }
  checkStatus=(status,data)=>{
       this.setState({status,data});
  }
  printError=()=>
  {
    const {status,data}=this.state;
    if(status!==200 || status !==201)
    {
  return (<p id="demo">{data.message}</p>)
    }
  }
  render() { 
    const {status,statusState}=this.state;
    console.log('Status in index',status);
    if((status ===200 || status ===201) && statusState===false)
    {
        this.setState({statusState:true});
    }
    return (
      <Router>
        <div >
          <ul className="header">
            <li>
              <Link className="linkTag" to="/">Home</Link>
            </li>
            <li>
              <Link className="linkTag" to="/signup">Signup</Link>
            </li>
            <li>
              <Link className="linkTag" to="/login">Login</Link>
            </li>
          </ul>
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {!this.state.statusState && 
            (<Route path="/signup">
                {this.printError()}
                <SignUp checkStatus={this.checkStatus}/>
             </Route> )}
            {this.state.statusState && (<Redirect from="/signup" to="/"/>) }
            {!this.state.statusState && 
            (<Route path="/login">
                {this.printError()}
                <Login checkStatus={this.checkStatus}/>
             </Route> )}
            {this.state.statusState && (<Redirect from="/login" to="/"/>) }

          </Switch>
        </div>
      </Router>
    );
  }
}

