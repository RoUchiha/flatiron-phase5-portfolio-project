import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTeams } from '../actions/teamActions';
import Team from '../components/Team.js'
import TeamCollection from '../components/TeamCollection';
import { Container, Card } from 'semantic-ui-react'


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
        team.user_id === this.props.current_user.user.id)

      console.log('my teams test', myTeams)
      console.log('teams store check', this.props.teams)

    
        return (
            
           <div>

              <Container>

                <Card.Group itemsPerRow={2} className='team-group'>
                  {myTeams.map(team => (
                    <Card>
                        <TeamCollection id={team.id} name={team.name} user_username={team.user_username} pokemon1={team.pokemon1} pokemon2={team.pokemon2} pokemon3={team.pokemon3} pokemon4={team.pokemon4} pokemon5={team.pokemon5} pokemon6={team.pokemon6} />
                    </Card>))}

                </Card.Group>

              </Container>

           </div>
                
               
           
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