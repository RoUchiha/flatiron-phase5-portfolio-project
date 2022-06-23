import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTeams } from '../actions/teamActions';
import Team from '../components/Team.js'


class MyTeamsContainer extends Component {

  state = {
    allTeams: []
  }



  componentDidMount() {
    fetch('http://localhost:4000/teams')
    .then(response => response.json())
    .then(data => this.setState({ allTeams: data}) )
    .catch(error => console.log("fetch teams", error));

    this.props.setTeams();
}




    render() {

      const myTeams = this.state.allTeams.filter( team => 
        team.user_id == this.props.current_user.user.id)

      console.log('my teams test', myTeams)
      console.log('teams store check', this.props.teams)
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



export default connect(mapStateToProps, { setTeams })(MyTeamsContainer);