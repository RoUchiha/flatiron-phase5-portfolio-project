import React, { Component } from 'react';
import Pokemon from '../components/Pokemon.js';
import { Container, Card } from 'semantic-ui-react'
import { fetchPokemon } from '../actions/pokemonActions.js';
import PokemonCollection from '../components/PokemonCollection.js';


const Pokedex = ({ allPokemon }) => {

   

        

        console.log('pokemon', allPokemon)
        return (

            <div className='pokedex centered'>
                <div className='pokedex-title'>
                    <h2 className='pokedex-name'>POKEDEX</h2>
                </div>
            <Container className='pokedex-scroll'>
                

                <Card.Group itemsPerRow={6} className='pokedex-group'>
                    {allPokemon.map(pokemon => (
                      <Card key={pokemon.id}>
                        <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} pokedex={pokemon.pokedex} sprite={pokemon.sprite} />
                        </Card> ))}

                </Card.Group>                
        
            </Container>
            </div>
        )
    


}

export default Pokedex;