import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Browser } from 'react-router-dom'

const HomeRedirect = props => {

    let { logged_in } = props;

    if (logged_in) {
        this.props.history.push('/myteams')
    } else {
        <div>

              
                <h1>Welcome to Pokesquad</h1>
                <h2>a Pokemon team creator</h2>

                <Login />

                <Signup />
                        
            </div>
    }

}


export default HomeRedirect;