import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/teamActions';
import Team from '../components/Team.js'


class MyTeamsContainer extends Component {

    render() {
      console.log('team test', this.props.teams)
        return (
            
           'team test'
                
               
           
        )
    }

    // `/users/${this.state.current_user.id}/teams`
}

const mapStateToProps = (state) => {
    return {
      current_user: state.users,
      teams: state.teams
    }
  }

export default connect(mapStateToProps)(MyTeamsContainer);