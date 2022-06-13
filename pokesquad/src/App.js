import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Navbar from './components/NavBar';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pokedex from './containers/Pokedex';
import AllTeamsContainer from './containers/AllTeamsContainer';
import MyTeamsContainer from './containers/MyTeamsContainer';
import AddTeamContainer from './containers/AddTeamContainer'
import './App.css';
import { ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE, ADDTEAM, SIGNUP } from './routePaths';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <h1>Testing</h1>
        <Navbar />
        <Router >
          
            <Route path={HOMEPAGE} component={MyTeamsContainer} />
            <Route path={ALLTEAMS} component={AllTeamsContainer} />
            <Route path={MYTEAMS} component={MyTeamsContainer} />
            <Route path={POKEDEX} component={Pokedex} />
            <Route path={ADDTEAM} component={AddTeamContainer} />
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
