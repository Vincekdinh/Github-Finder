import React from "react";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //Switch doesn't work in react-router-dom version 6
import About from "./components/pages/About";
import Company from "./components/pages/Company";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
              <div>
                <Navbar title='Github Finder' icon='fab fa-github' />
                <div className='container'>
                  <Alert/>
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/company' component={Company} />
                    <Route exact path='/user/:login' component={User} /> 
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </Router>
        </AlertState>
    </GithubState>
  );
};

export default App;

