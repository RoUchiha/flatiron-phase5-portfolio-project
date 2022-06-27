import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../actions/userActions";
import { LOGOUT } from "../actions/constants";
import axios from "axios";
import { logoutUser } from "../actions/userActions";



class Logout extends Component {

    componentDidMount() {
        this.props.logoutUser()
    }


    render() {
        return (
            <Redirect to='/home' />
        )
    }


}


const mapDispatchToProps = (dispatch) => {
    return {
        logoutDispatch: data => dispatch({ type: LOGOUT })
    }
}

export default connect(null, { logoutUser })(Logout);