import axios from "axios";
import { LOGIN, LOGOUT } from "./constants";

export function signup(user) {

    return dispatch => {
        fetch('http://localhost:4000/users', {
            method: "POST",
            headers: {
                
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify({user})
        },
        { withCredentials: true }
        )
        .then(response => response.json())
        .then(data => {
            console.log('signup', data);
            if (data.status === 'created') {
                
                dispatch({ type: "LOGIN", payload: data.user })
            }
        })
        .catch(error => console.log("signup error", error))
    }

}


export const setUser = () => {
    return (dispatch) => {
        dispatch({type: "GETTING_USER" });
        return axios.get('http://localhost:4000/logged_in', 
        {withCredentials: true })
        .then((data) => {
            console.log('user set', data.data)
            dispatch({
                type: "LOGIN_USER",
                payload: data.data
            })
        })
    }
}


export function login(user) {

    return (dispatch) => {
        fetch(`http://localhost:4000/login`, {
            method: "POST",
            headers: {
                
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user})
        },
            { withCredentials: true }
        )
        .then(response => response.json())
        .then(data => {
            console.log("login", data)
            if (data.logged_in) {
                dispatch({ type: 'LOGIN', payload: data })
            }
        })
        .catch(error => console.log("login error", error))
    }

}


export function logout() {
    return dispatch => {
        fetch(`http://localhost:4000/logout`, {
            method: "DELETE"
        }, { withCredentials: true })
        .then(response => response.json())
        .then(data => {
            if (!data.logged_in) {
                dispatch({ type: LOGOUT, payload: data })
            }
        })
        .catch(error => console.log("logout error", error))
    }
}


export function loggedinStatus() {
    return dispatch => {
        fetch(`http://localhost:4000/logged_in`, { withCredentials: true })
        .then(response => response.json())
        .then(data => {
            console.log("loginStatus", data)
            if (data.is_logged_in) {
                dispatch({ type: LOGIN, payload: data })
            } else {
                dispatch({ type: LOGOUT, payload: data })
            }
        })
    }
}