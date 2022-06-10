import React, { Component } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";

import { connect } from "react-redux";
import { ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE, ADDTEAM } from '../routePaths';

class Navbar extends Component {

    


    render() {
        return (
            <div id="navbar" className="navbar">
                
                    <div id="navbar-list">
                        <h1>PokeSquad</h1>
                        <NavLink className='nav-link' to='/home' name='/home' >HOMEPAGE</NavLink>
                        <NavLink className='nav-link' to='/allteams'>ALL TEAMS</NavLink>
                        <NavLink className='nav-link' to={MYTEAMS}>MY TEAMS</NavLink>
                        <NavLink className='nav-link' to={ADDTEAM}>ADD TEAM</NavLink>
                        <NavLink className='nav-link' to={POKEDEX}>POKEDEX</NavLink>

                    </div>

        
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      current_user: state.users
    }
  }

export default connect(mapStateToProps)(Navbar);