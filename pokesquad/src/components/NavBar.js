import React, { Component } from "react";
import { NavLink, Link, useHistory, Redirect, withRouter } from "react-router-dom";
import { logout } from "../actions/userActions";

import { connect } from "react-redux";
import { ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE, ADDTEAM } from '../routePaths';

class Navbar extends Component {

    
   

        handleClick = (event) => {
            this.props.history.push(`${event.target.name}`)
        }

    render() {
        return (
            <div id="navbar" className="navbar">
                
                    <div id="navbar-list">
                        <h1>PokeSquad</h1>
                        <Link className='nav-link' to='/home' name='/home'  >HOMEPAGE</Link>
                        <Link className='nav-link' to='/allteams' name='/allteams' >ALL TEAMS</Link>
                        <NavLink className='nav-link' to={MYTEAMS} name='/myteams' >MY TEAMS</NavLink>
                        <NavLink className='nav-link' to={ADDTEAM} name='/addteam' >ADD TEAM</NavLink>
                        <NavLink className='nav-link' to={POKEDEX} name='/pokedex' >POKEDEX</NavLink>

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