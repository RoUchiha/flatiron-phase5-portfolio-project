import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/userActions";
import { connect } from "react-redux";

class Navbar extends Component {

    state = {
        user: {}
    }

    render() {
        return (
            <div className="navbar">
                <nav>
                    <ul id="navbar-list">
                        <li id="navbar-title"><h1>PokeSquad</h1></li>
                        <li id="navbar-item-all-teams"><NavLink exact to="/teams">ALL TEAMS</NavLink></li>
                        <li id="navbar-item-my-teams"><NavLink exact to={`/users/${this.state.current_user.id}/teams`}>MY TEAMS</NavLink></li>
                        <li id="navbar-item-add-team"><NavLink exact to="/teams/new">ADD TEAM</NavLink></li>
                        <li id="navbar-item-pokedex"><NavLink exact to="/pokemons"></NavLink>POKEDEX</li>

                        {this.props.use}

                    </ul>

                </nav>

            </div>
        )
    }

}