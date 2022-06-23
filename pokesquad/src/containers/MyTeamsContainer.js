import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/teamActions';
import Team from '../components/Team.js'


class MyTeamsContainer extends Component {

  state = {
    allTeams: []
  }



  componentDidMount() {
    fetch('http://localhost:4000/teams')
    .then(response => response.json())
    .then(data => this.setState({ allTeams: data}) )
    .catch(error => console.log("fetch teams", error))
}




    render() {

      const myTeams = this.state.allTeams.filter( team => 
        team.user_id == this.props.current_user.user.id)

      console.log('team test', this.props.teams, myTeams)
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