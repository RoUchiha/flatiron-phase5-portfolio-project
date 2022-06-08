import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/userActions';
import { Link } from 'react-router-dom';
import '../../style/Login.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };


    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    };


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.signupDispatch(this.state)
        this.props.routerProps.history.push("/teams")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                onChange={this.handleUsernameChange}
                type="text"
                name="username"
                placeholder='Username (minimum 4 characters)'
                required
                />

                <input 
                onChange={this.handlePasswordChange}
                type='password'
                name='password'
                placeholder='Password'
                />

                <button type="submit">
                    Sign Up
                </button>

            </form>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        signupDispatch: user => dispatch(signup(user))
    }
}


export default connect(null, mapDispatchToProps)(Signup);