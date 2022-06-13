import { combineReducers } from 'redux';

import { LOGIN, LOGOUT, GET_POKEMON, GET_TEAMS, ADD_TEAM} from '../actions/constants';







const userReducer = (state = {user: {}, logged_in: false}, action) => {

    switch (action.type) {
        case LOGIN:
            return  {...state, user: action.payload, logged_in: action.payload}

        case LOGOUT:
            return {}

        default:
            return state
    }

}

function teamReducer(state = {}, action) {
    
    switch (action.type) {
        case GET_TEAMS:
            return action.payload
        
        case ADD_TEAM:
            return [...state, action.payload]
        
        default:
            return state
        
    }

}


function pokemonReducer(state = [], action) {

    switch (action.type) {
        case GET_POKEMON:
            return action.payload
        default:
            return state
    }

}


function commentReducer(state = {}, action) {

    switch (action.type) {

        default:
            return state
    }

}

const rootReducer = combineReducers({
    users: userReducer,
    teams: teamReducer,
    pokemon: pokemonReducer,
    comment: commentReducer
})


export default rootReducer;
