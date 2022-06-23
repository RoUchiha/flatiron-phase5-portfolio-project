import React, { Component } from 'react';
import Pokedex from '../containers/Pokedex';
import { addTeam } from '../actions/teamActions';
import { DropdownSearchInput } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ADD_TEAM } from '../actions/constants';


class AddNewTeam extends Component {

    
  
    

   constructor(props) {
       super(props);
       this.state = {
            user_id: this.props.current_user.user.id,
            user_username: this.props.current_user.user.username,
           name: '',
           pokemon1: 0,
           pokemon2: 0,
           pokemon3: 0,
           pokemon4: 0,
           pokemon5: 0,
           pokemon6: 0
       }
   }

   handleChange = (event) => {

       this.setState({
           [event.target.name]: event.target.value
       })
   }

   handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:4000/teams', {
        team: {
            user_id: this.state.user_id,
            user_username: this.state.user_username,
           name: this.state.name,
           pokemon1: this.state.pokemon1,
           pokemon2: this.state.pokemon2,
           pokemon3: this.state.pokemon3,
           pokemon4: this.state.pokemon4,
           pokemon5: this.state.pokemon5,
           pokemon6: this.state.pokemon6 
        }
    },
    
    )
    .then(data => {
        console.log("creating team", data.data)
        if (data.data.status === 'created') {
            this.props.addTeamDispatch(data.data.team);
            
        }
    })
    .catch(error => console.log("login error", error))
   
}


   
   buildOptions() {
    var arr = [];

    for (let i = 0; i <= 898; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }

    return arr; 
    }

   render() {
       console.log(this.state)
       console.log(this.props.current_user)
       return (
           <div className='add-team-form'>
               <form onSubmit={this.handleSubmit}>

                    <input type="text" name="name" value={this.state.name} placeholder="Team Name" onChange={this.handleChange} required />


                    <select value={this.state.pokemon1} name="pokemon1" onChange={this.handleChange} required>
                        {this.buildOptions()}
                    </select>

                    <select value={this.state.pokemon2} name="pokemon2" onChange={this.handleChange} required>
                        {this.buildOptions()}
                    </select>

                    <select value={this.state.pokemon3} name="pokemon3" onChange={this.handleChange} required>
                        {this.buildOptions()}
                    </select>

                    <select value={this.state.pokemon4} name="pokemon4" onChange={this.handleChange} required>
                        {this.buildOptions()}
                    </select>

                    <select value={this.state.pokemon5} name="pokemon5" onChange={this.handleChange} required>
                        {this.buildOptions()}
                    </select>

                    <select value={this.state.pokemon6} name="pokemon6" onChange={this.handleChange} required>
                        {this.buildOptions()}
                    </select>

                    <input type="submit" value="Create Team" id='add-team-button'/>

                        
               </form>


           </div>
       )
   }

}

const mapStateToProps = (state) => {
    return {
        current_user: state.users,
        pokemon: state.pokemon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTeamDispatch: team => dispatch({type: ADD_TEAM, payload: team})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTeam)