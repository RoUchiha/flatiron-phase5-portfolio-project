import React, { Component } from 'react';
import Pokedex from '../containers/Pokedex';
import { addTeam } from '../actions/teamActions';
import { DropdownSearchInput } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class addTeam extends Component {

   constructor(props) {
       super(props);
       this.state = {
           user_id: this.props.current_user.id,
           name: '',
           pokemon1: '',
           pokemon2: '',
           pokemon3: '',
           pokemon4: '',
           pokemon5: '',
           pokemon6: ''
       }
   }

   handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
   }

   handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTeamDispatch(this.state);
        this.props.routerProps.history.push('/teams')
   }

   render() {
       const allIds = () => { for (i=0;i<899;i++) {
           <option value={`${i}`}>{i}</option>
       }  }
       return (
           <div className='add-team-form'>
               <form onSubmit={this.handleSubmit}>

                    <input type="text" name="name" value={this.state.name} placeholder="Team Name" onChange={this.handleChange} required />


                    <select value={this.state.pokemon1} name="pokemon1" onChange={this.handleChange} required>
                        {allIds}
                    </select>

                    <select value={this.state.pokemon2} name="pokemon2" onChange={this.handleChange} required>
                        {allIds}
                    </select>

                    <select value={this.state.pokemon3} name="pokemon3" onChange={this.handleChange} required>
                        {allIds}
                    </select>

                    <select value={this.state.pokemon4} name="pokemon4" onChange={this.handleChange} required>
                        {allIds}
                    </select>

                    <select value={this.state.pokemon5} name="pokemon5" onChange={this.handleChange} required>
                        {allIds}
                    </select>

                    <select value={this.state.pokemon6} name="pokemon6" onChange={this.handleChange} required>
                        {allIds}
                    </select>

                    <input type="submit" value="Create Team" id='add-team-button'/>

                        
               </form>


           </div>
       )
   }

}

mapStateToProps = (state) => {
    return {
        users: state.users,
        pokemon: state.pokemon
    }
}

mapDispatchToProps = dispatch => {
    return {
        addTeamDispatch: team => dispatch(addTeam(team))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addTeam)