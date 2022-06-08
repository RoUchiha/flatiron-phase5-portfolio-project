import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/userActions';
import { Link } from 'react-router-dom';
import '../../style/Login.css';

class Login extends Component {

    state = { 
        username: '',
        password: ''
    }


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
        this.props.loginDispatch(this.state)
        this.props.routerProps.history.push("/teams")
    }


    render() {
        return (
            <div className='login-container'>
                <h2>LOGIN</h2>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <input 
                    onChange={this.handleUsernameChange}
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={this.state.username}
                    required
                    />

                    <input 
                    onChange={this.handlePasswordChange}
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={this.state.password}
                    required
                    />

                    <input 
                    type='submit'
                    value='Login'
                    id='login-button'
                    />

                </form>
                <p id="signup-p-tag">Need to create an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        )
    }

}


const mapDispatchToProps = dispatch => {
    return {
        loginDispatch: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);