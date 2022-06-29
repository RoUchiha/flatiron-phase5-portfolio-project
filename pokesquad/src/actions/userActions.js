import axios from "axios";
import { LOGIN, LOGOUT } from "./constants";




export function signup(user) {

    return dispatch => {
        axios.post('http://localhost:4000/users', {
            user: {
                username: user.username,
                password: user.password 
            }
        },
        { withCredentials: true }
        )
        .then(data => {
            console.log("signup", data.data)
            if (data.data.status === 'created') {
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

export const logoutUser = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:4000/logout`, {withCredentials: true})
        .then(data => {
            console.log('logout data', data.data)
            if (data.data.logged_out) {
                dispatch({
                    type: "LOGOUT"
                })
            }
        })
        .catch(error => console.log("logout error", error))
    }
}


export function login(user) {
    
    return (dispatch) => {
    axios.post('http://localhost:4000/login', {
            user: {
                username: user.username,
                password: user.password 
            }
        },
        { withCredentials: true }
        )
        .then(data => {
            console.log("login", data.data)
            if (data.data.logged_in) {
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