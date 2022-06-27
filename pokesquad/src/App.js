import React, { Component } from 'react';
import { connect  } from 'react-redux';
import Navbar from './components/NavBar';
import { Route, withRouter, Redirect, Routes, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pokedex from './components/Pokedex';
import PokedexContainer from './containers/PokedexContainer';
import Home from './components/Home';
import AllTeamsContainer from './containers/AllTeamsContainer';
import MyTeamsContainer from './containers/MyTeamsContainer';
import AddTeamContainer from './containers/AddTeamContainer'
import './App.css';
import { LOGOUT, ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE, ADDTEAM, SIGNUP } from './routePaths';
import Logout from './components/Logout';

class App extends Component {

  

  render() {
    const logged_in = this.props.current_user.logged_in;

    return (
      <div className="App">
        
       
        <Navbar />
        
          <Switch>
            <Route exact path='/' >{<Redirect to='/home' />}</Route>
            <Route exact path={HOMEPAGE} >{logged_in ? <Redirect to='/myteams' /> : <Home />} </Route>
            <Route exact path={ALLTEAMS} component={AllTeamsContainer}>{!logged_in ? <Redirect to='/home' /> : <AllTeamsContainer />}</Route>
            <Route exact path={MYTEAMS} >{!logged_in ? <Redirect to='/home' /> : <MyTeamsContainer />}</Route>
            <Route exact path={POKEDEX} component={PokedexContainer} />
            <Route exact path={ADDTEAM} component={AddTeamContainer} >{!logged_in ? <Redirect to='/home' /> : <AddTeamContainer />}</Route>
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={SIGNUP} component={Signup} />
            <Route exact path={LOGOUT} component={Logout}/>
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
