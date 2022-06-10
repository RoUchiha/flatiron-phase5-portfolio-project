import React, { Component } from 'react';
import Navbar from './components/NavBar';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pokedex from './containers/Pokedex';
import allTeamsContainer from './containers/allTeamsContainer';
import myTeamsContainer from './containers/myTeamsContainer';
import './App.css';
import { ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE } from './routePaths';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router >
          <Switch >
            <Route exact path={ALLTEAMS} component={allTeamsContainer} />
            <Route exact path={MYTEAMS} component={myTeamsContainer} />
            <Route exact path={POKEDEX} component={Pokedex} />
          </Switch>
        </Router>
      
      <h1>Testing</h1>
      </div>

    )
  }

}

export default App;
