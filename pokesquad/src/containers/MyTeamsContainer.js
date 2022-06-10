import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/teamActions';
import Team from '../components/Team.js'


class MyTeamsContainer extends Component {

    render() {
        return (
            "my teams test"
        )
    }

    // `/users/${this.state.current_user.id}/teams`
}


export default MyTeamsContainer;