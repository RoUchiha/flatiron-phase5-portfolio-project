import { combineReducers } from 'redux';

import { LOGIN, LOGOUT, GET_POKEMON, GET_TEAMS, ADD_TEAM} from '../actions/constants';

import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';



const userState = {
    user: [
        {id: '0', username: 'state'}
    ]
}

const userPersistConfig = {
    key: 'user',
    storage: storage,

}

const usersReducer = (state = 0, action) => {

    switch (action.type) {

        case "GETTING_USER":
            return 'testing';

        case "LOGIN_USER":
            console.log('dispatch success', action.type, action.payload, state)
            return state + 2;
           
    
        case LOGOUT:
            console.log('logged out', state)
            return 3;

        default:
            console.log('dispatch error', action.payload, state)
            return 111;
    }
};




const teamState = ['test']



function teamReducer(state = teamState, action) {
    
    switch (action.type) {
        case GET_TEAMS:
            return action.payload
        
        case ADD_TEAM:
            return [...state, action.payload]
        
        default:
            return state
        
    }

};



function pokemonReducer(state = [], action) {

    switch (action.type) {
        case GET_POKEMON:
            return action.payload
        default:
            return state
    }

};


function commentReducer(state = {}, action) {

    switch (action.type) {

        default:
            return state
    }

};

const rootReducer = combineReducers({
    users: persistReducer(userPersistConfig, usersReducer),
    teams: teamReducer,
    pokemon: pokemonReducer,
    comment: commentReducer
});

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['users'],
    stateReconciler: autoMergeLevel2,
}


const rootPersisted = persistReducer(rootPersistConfig ,rootReducer)

export default rootPersisted;