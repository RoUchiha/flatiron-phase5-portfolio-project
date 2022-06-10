import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Navbar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pokedex from './containers/Pokedex';
import allTeamsContainer from './containers/allTeamsContainer';
import myTeamsContainer from './containers/myTeamsContainer';
import addTeamContainer from './containers/addTeamContainer'
import './App.css';
import { ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE, ADDTEAM, SIGNUP } from './routePaths';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <h1>Testing</h1>
        <Navbar />
        <Router >
          
            <Route path={HOMEPAGE} component={myTeamsContainer} />
            <Route path={ALLTEAMS} component={allTeamsContainer} />
            <Route path={MYTEAMS} component={myTeamsContainer} />
            <Route path={POKEDEX} component={Pokedex} />
            <Route path={ADDTEAM} component={addTeamContainer} />
            <Route path={LOGIN} component={Login} />
            <Route path={SIGNUP} component={Signup} />
          
        </Router>

        
      
      
      </div>

    )
  }

}

const mapStateToProps = (state) => {
  return {
    current_user: state.users
  }
}

export default connect(mapStateToProps)(App);
