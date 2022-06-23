import { GET_POKEMON } from "./constants";

export function fetchPokemon() {

    return dispatch => {
        fetch('/pokemons')
        .then(response => {
            return response.json()
        })
        .then(data => 
            dispatch({ type: GET_POKEMON, payload: data.data }))
        .catch(error => console.log("fetch pokemon", error))
    }

}