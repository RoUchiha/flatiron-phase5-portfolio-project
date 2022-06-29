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

    return (dispatch) => {
        axios.post('http://localhost:4000/teams', {
        team: {
            user_id: team.user_id,
            user_username: team.user_username,
           name: team.name,
           pokemon1: team.pokemon1,
           pokemon2: team.pokemon2,
           pokemon3: team.pokemon3,
           pokemon4: team.pokemon4,
           pokemon5: team.pokemon5,
           pokemon6: team.pokemon6 
        }
    },
    
    )
    .then(data => {
        console.log("creating team", data.data)
        if (data.data.status === 'created') {
            dispatch({type: ADD_TEAM, payload: team})
            
            
        }
    })
    .catch(error => console.log("login error", error))
    }

}