import React, { Component } from 'react';
import '../App.css'
import AddNewTeam from "../components/AddTeam";
import Pokedex from "../components/Pokedex";
import { Container } from 'semantic-ui-react'
import PokedexContainer from './PokedexContainer';
import { connect } from 'react-redux';


class AddTeamContainer extends Component {


    state = {
        allPokemon: this.props.pokemon
    }



    

    render() {

        return (

            <div>
                <br />
                <h2 className='add-team-title'>Create a new team!</h2>
            
            <Container>

                <AddNewTeam />

                <br />

                <div className='add-team-pokedex'>
                <Pokedex  allPokemon={this.state.allPokemon} />
                </div>

            </Container>
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




export default connect(mapStateToProps)(AddTeamContainer);