import React, { Component } from 'react';
import '../App.css'
import AddNewTeam from "../components/AddTeam";
import Pokedex from "../components/Pokedex";
import { Container } from 'semantic-ui-react'
import PokedexContainer from './PokedexContainer';


class AddTeamContainer extends Component {


    state = {
        allPokemon: []
    }



    componentDidMount() {
        fetch('http://localhost:4000/pokemons')
        .then(response => response.json())
        .then(data => this.setState({ allPokemon: data}) )
        .catch(error => console.log("fetch pokemon", error))
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




export default AddTeamContainer;