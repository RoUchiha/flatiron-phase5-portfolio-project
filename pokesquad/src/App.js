import React, { Component } from 'react';
import Navbar from './components/NavBar';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pokedex from './containers/Pokedex';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
      <header className='App-header'>
        <Route exact path={ALLTEAMS} component={allTeamsContainer} />
        <Route exact path={MYTEAMS} component={myTeamsContainer} />
        <Route exact path={POKEDEX} component={Pokedex} />

      
      </header>
  
      </div>

    )
  }

}

export default App;
