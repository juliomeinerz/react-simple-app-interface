import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router';

import Users from './routes/users';
import Home from './routes/home';

class App extends Component { 
  render() {
    return (
      <div className="container"> 
        <nav className="navbar navbar-fixed-top navbar-inverse"> 
          <div className="navbar-header">
            <a className="navbar-brand"> Simple App </a>
          </div>
          <ul className="navbar-nav nav">
            <li> <Link to="/" className="btn btn-inverse"> Home </Link> </li>
            <li> <Link to="/users" className="btn btn-inverse"> Users </Link> </li>
          </ul>
        </nav>       
        <div className="container">
          {this.props.children}
        </div>
        <div className="navbar navbar-inverse navbar-fixed-bottom">


        </div>
      </div>
      )
    }  
  }   

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/users" component={Users} />
    </Route>
  </Router>,
  document.querySelector(".container")
);
