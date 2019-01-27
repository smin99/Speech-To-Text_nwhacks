import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import * as routes from "../constants/routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
            <Navbar />
            <Switch>
              <Route exact path={routes.HOME} component={() => <Home />} />
              <Route exact path={routes.PROFILE} component={() => <Profile />} />
              <Route exact path={routes.SEARCH} component={() => <Search />} />
              <Route exact path={routes.SIGNUP} component={() => <Signup />} />
              <Route exact path={routes.LOGIN} component={() => <Login />} />
              <Redirect to={'/'}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
