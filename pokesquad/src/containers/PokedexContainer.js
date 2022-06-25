import React, { Component } from "react";
import Pokedex from "../components/Pokedex";
import '../App.css';


class PokedexContainer extends Component {

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

        return(

            
                
            <Pokedex allPokemon={this.state.allPokemon} />

            
        )
    }


}

export default PokedexContainer;