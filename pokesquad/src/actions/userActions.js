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


