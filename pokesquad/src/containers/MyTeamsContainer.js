import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/teamActions';
import Team from '../components/Team.js'


class MyTeamsContainer extends Component {

    render() {
        return (
            
           
                
               `${this.props.current_user.username}`
           
        )
    }

    // `/users/${this.state.current_user.id}/teams`
}

const mapStateToProps = (state) => {
    return {
      current_user: state.users
    }
  }

export default connect(mapStateToProps)(MyTeamsContainer);