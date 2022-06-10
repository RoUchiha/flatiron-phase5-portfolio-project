import React, { Component } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { logout } from "../actions/userActions";

import { connect } from "react-redux";
import { ALLTEAMS, MYTEAMS, POKEDEX, LOGIN, HOMEPAGE, ADDTEAM } from '../routePaths';

class Navbar extends Component {


        handleClick = (event) => {
            window.location.href=`${event.target.name}`
        }

    render() {
        return (
            <div id="navbar" className="navbar">
                
                    <div id="navbar-list">
                        <h1>PokeSquad</h1>
                        <NavLink className='nav-link' to='/home' name='/home' onClick={this.handleClick} >HOMEPAGE</NavLink>
                        <NavLink className='nav-link' to='/allteams' name='/allteams' onClick={this.handleClick}>ALL TEAMS</NavLink>
                        <NavLink className='nav-link' to={MYTEAMS} name='/myteams' onClick={this.handleClick}>MY TEAMS</NavLink>
                        <NavLink className='nav-link' to={ADDTEAM} name='/addteam' onClick={this.handleClick}>ADD TEAM</NavLink>
                        <NavLink className='nav-link' to={POKEDEX} name='/pokedex' onClick={this.handleClick}>POKEDEX</NavLink>

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