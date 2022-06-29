import React, { Component } from 'react';
import Pokedex from './Pokedex';
import { addTeam } from '../actions/teamActions';
import { DropdownSearchInput, Card } from 'semantic-ui-react';
import { Link, Browser, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { ADD_TEAM } from '../actions/constants';
import Pokemon from './Pokemon';
import PokemonCollection from './PokemonCollection';


class AddNewTeam extends Component {

   constructor(props) {
       super(props);
       this.state = {
            user_id: this.props.current_user.user.id,
            user_username: this.props.current_user.user.username,
           name: '',
           pokemon1: 1,
           pokemon2: 1,
           pokemon3: 1,
           pokemon4: 1,
           pokemon5: 1,
           pokemon6: 1
       }
   }

   handleChange = (event) => {

       this.setState({
           [event.target.name]: event.target.value
       })
   }

   handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTeam(this.state)
    this.props.history.push('/myteams')
}


   
   buildOptions() {
    var arr = [];

    for (let i = 1; i <= 898; i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
    }

    return arr; 
    }

   render() {
       console.log(this.state)
       console.log(this.props.current_user)
       return (
           <div className='add-team-form'>
               <form className='add-team-form-form' onSubmit={this.handleSubmit}>

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

              {/* <div>
                <Card.Group itemsPerRow={6} >
                    <Pokemon />

                </Card.Group>

                </div> */}


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

export default withRouter(connect(mapStateToProps, { addTeam })(AddNewTeam))