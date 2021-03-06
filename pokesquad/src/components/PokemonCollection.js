import React from "react";
import Pokemon from "./Pokemon";
import { Card } from 'semantic-ui-react';


const PokemonCollection = ({ pokemons }) => {

    <Card.Group itemsPerRow={10}>
        {pokemons.map(pokemon => (
           <Card>
            <Pokemon key={pokemon.id} name={pokemon.name} pokedex={pokemon.pokedex} sprite={pokemon.sprite} /> 
           </Card>))}

    </Card.Group>

}


export default PokemonCollection;