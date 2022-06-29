import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTeams } from '../actions/teamActions';
import Team from '../components/Team.js'
import TeamCollection from '../components/TeamCollection';
import { Container, Card } from 'semantic-ui-react'


class AllTeamsContainer extends Component {


  state = {
    allTeams: this.props.teams
  }



  


    render() {

      const allTeams = this.state.allTeams

        console.log('user state check', this.props.current_user)
        console.log('all teams check', this.props.teams)
          return (
            
            <div>
              <br />
              <h2 className='all-teams-title'>All Teams</h2>
 
               <Container className='all-team-scroll'>
 
                 <Card.Group itemsPerRow={2} className='team-group'>
                   {allTeams.map(team => (
                     <Card>
                         <TeamCollection key={team.id} id={team.id} name={team.name} user_username={team.user_username} pokemon1={team.pokemon1} pokemon2={team.pokemon2} pokemon3={team.pokemon3} pokemon4={team.pokemon4} pokemon5={team.pokemon5} pokemon6={team.pokemon6} />
                     </Card>))}
 
                 </Card.Group>
 
               </Container>
 
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

export default connect(mapStateToProps, { setTeams })(AllTeamsContainer);