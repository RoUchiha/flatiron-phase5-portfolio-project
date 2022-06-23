import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Navbar from './components/NavBar';
import { Route, withRouter, Routes, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pokedex from './containers/Pokedex';
import Home from './components/Home';
import AllTeamsContainer from './containers/AllTeamsContainer';
import MyTeamsContainer from './containers/MyTeamsContainer';
import AddTeamContainer from './containers/AddTeamContainer'
import './App.css';
import { LOGOUT, ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE, ADDTEAM, SIGNUP } from './routePaths';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        
        <h1>Testing</h1>
        <Navbar />
        
          <Switch>
            <Route exact path={HOMEPAGE} component={Home} />
            <Route exact path={ALLTEAMS} component={AllTeamsContainer} />
            <Route exact path={MYTEAMS} component={MyTeamsContainer} />
            <Route exact path={POKEDEX} component={Pokedex} />
            <Route exact path={ADDTEAM} component={AddTeamContainer} />
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={SIGNUP} component={Signup} />
            <Route exact path={LOGOUT} component={Home}/>
          </Switch>
        

        
      
      
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
