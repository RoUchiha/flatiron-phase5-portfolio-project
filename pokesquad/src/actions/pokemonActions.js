import { GET_POKEMON } from "./constants";
import axios from "axios";

export function fetchPokemon() {

    return (dispatch) => {
        dispatch({type: "GETTING_TEAMS" });
        return axios.get('http://localhost:4000/pokemons')
        .then((data) => {
            console.log('all pokemon set', data.data)
            dispatch({
                type: "GET_POKEMON",
                payload: data.data
            })
        })
    }

}