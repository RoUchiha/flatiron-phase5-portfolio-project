import { GET_TEAMS, ADD_TEAM } from "./constants";

export function fetchTeams() {

    return dispatch => {
        fetch(`/teams`)
        .then(response => {
            return response.json()
        })
        .then(data => dispatch({ type: GET_TEAMS, payload: data }))
        .catch(error => console.log("fetch teams", error))
    }

}


export function addTeam(team) {

    return dispatch => {
        fetch(`/teams`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(team)
        })
        .then(response => response.json())
        .then(data => dispatch({ type: ADD_TEAM, payload: data }))
        .catch(error => console.log("add team", error))
    }

}