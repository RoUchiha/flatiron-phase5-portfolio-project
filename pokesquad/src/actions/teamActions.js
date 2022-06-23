import { GET_TEAMS, ADD_TEAM } from "./constants";
import axios from "axios";



export function fetchTeams() {

    return dispatch => {
        fetch(`http://localhost:4000/teams`)
        .then(response => {
            return response.json()
        })
        .then(data => dispatch({ type: GET_TEAMS, payload: data }))
        .catch(error => console.log("fetch teams", error))
    }

}

export const setTeams = () => {
    return (dispatch) => {
        dispatch({type: "GETTING_TEAMS" });
        return axios.get('http://localhost:4000/teams')
        .then((data) => {
            console.log('teams set', data.data)
            dispatch({
                type: GET_TEAMS,
                payload: data.data
            })
        })
    }
}



export function addTeam(team) {

    return dispatch => {
        fetch(`http://localhost:4000/teams`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify({team})
        })
        .then(response => response.json())
        .then(data => dispatch({ type: ADD_TEAM, payload: data }))
        .catch(error => console.log("add team", error))
    }

}