import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, setUser } from '../actions/userActions';
import { Link, Browser, withRouter } from 'react-router-dom';
import '../style/Login.css';
import axios from 'axios';

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
        console.log('signing up')
        event.preventDefault();
        this.props.signup(this.state)
       
    }
        

    render() {
        return (
            <div className='signup-parent-container'>
                <div className='signup-container'>
                    <h2>SIGN UP</h2>
                    <br />

                    <form onSubmit={this.handleSubmit}>
                        <label>Username: </label>
                        <input 
                        onChange={this.handleUsernameChange}
                        type="text"
                        name="username"
                        placeholder='Username (minimum 3 characters)'
                        value={this.state.username}
                        required
                        />

                        <label>Password: </label>
                        <input 
                        onChange={this.handlePasswordChange}
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        required
                        />

                        <button 
                        type="submit"
                        id='signup-button'
                        >
                            Sign Up
                        </button>

                    </form>
                    {/* <p id="login-p-tag"> Have an account already? <Link to="/login">Login here</Link></p> */}
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        signupDispatch: (data) =>  dispatch({ type: "LOGIN", data })
    }
}


export default withRouter(connect(null, { signup, setUser })(Signup));