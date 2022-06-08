import { LOGIN, LOGOUT } from "./constants";

export function signup(user) {

    return dispatch => {
        fetch(`/users`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origins": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        },
        { withCredentials: true }
        )
        .then(response => response.json())
        .then(data => {
            if (data.status === 'created') {
                dispatch({ type: LOGIN, payload: data })
            }
        })
        .catch(error => console.log("signup error", error))
    }

}


export function login(user) {

    return dispatch => {
        fetch(`/login`, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origins": "*",
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(user)
        },
            { withCredentials: true }
        )
        .then(response => response.json())
        .then(data => {
            console.log("login", data)
            if (data.logged_in) {
                dispatch({ type: LOGIN, payload: data })
            }
        })
        .catch(error => console.log("login error", error))
    }

}


export function logout() {
    return dispatch => {
        fetch(`/logout`, {
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
        fetch(`/logged_in`, { withCredentials: true })
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