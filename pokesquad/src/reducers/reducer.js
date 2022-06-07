import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from '../constants';

const rootReducer = combineReducers({
    users: userReducer,
    teams: teamReducer,
    pokemon: pokemonReducer
})

export default rootReducer;

function userReducer(state = {}, action) {

    switch (action.type) {
        case LOGIN:
            return action.payload

        case LOGOUT:
            return {}

        default:
            return state
    }


}

