import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, setUser } from '../actions/userActions';
import { Link, Browser, Redirect } from 'react-router-dom';
import '../style/Login.css';
import axios from 'axios';

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
        console.log('logging in')
        event.preventDefault();
        this.props.login(this.state);
        
       
    }


    

    render() {
        
        return (
            <div className='login-container'>
                <h2>LOGIN</h2>
                <br />
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label> 
                    <input 
                    onChange={this.handleUsernameChange}
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={this.state.username}
                    required
                    />
                    <label>Password: </label>
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
                {/* <p id="signup-p-tag">Need to create an account? <Link to="/signup">Sign Up</Link></p> */}
            </div>
        )
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        loginDispatch: (data) => dispatch({ type: 'LOGIN', data })
    }
}

export default connect(null, { login, setUser })(Login);