import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/teamActions';
import Team from '../components/Team.js'


class AllTeamsContainer extends Component {


    render() {
        console.log(this.props.current_user)
        return (
            "all teams test"
        )
    }



}


const mapStateToProps = (state) => {
    return {
      current_user: state.users
    }
  }

export default connect(mapStateToProps)(AllTeamsContainer);