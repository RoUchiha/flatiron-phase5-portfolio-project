import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/teamActions';
import Team from '../components/Team.js'


class AllTeamsContainer extends Component {


    render() {
        console.log('user state check', this.props.current_user)
        console.log('all teams check', this.props.teams)
        return (
          <div>
            
           </div>
        )
    }



}


const mapStateToProps = (state) => {
    return {
      current_user: state.users,
      teams: state.teams
    }
  }

export default connect(mapStateToProps)(AllTeamsContainer);