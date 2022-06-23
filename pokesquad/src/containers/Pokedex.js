import React, { Component } from 'react';
import Pokemon from '../components/Pokemon.js';
import { Container, Card } from 'semantic-ui-react'
import { fetchPokemon } from '../actions/pokemonActions.js';
import PokemonCollection from '../components/PokemonCollection.js';


class Pokedex extends Component {

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
        const fullPokedex = this.state.allPokemon

        console.log('pokemon', this.state.allPokemon)
        return (

            <div>

            <h2>POKEDEX</h2>

            <Container>

                <Card.Group itemsPerRow={6}>
                    {this.state.allPokemon.map(pokemon => (
                        <Pokemon key={pokemon.id} name={pokemon.name} pokedex={pokemon.pokedex} sprite={pokemon.sprite} /> ))}

                </Card.Group>                
        
            </Container>
            </div>
        )
    }


}

export default Pokedex;