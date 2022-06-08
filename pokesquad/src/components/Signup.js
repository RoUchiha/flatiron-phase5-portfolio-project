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
            <div className='signup-parent-container'>
                <div className='signup-container'>
                    <h2>SIGN UP</h2>
                    <hr />

                    <form onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input 
                        onChange={this.handleUsernameChange}
                        type="text"
                        name="username"
                        placeholder='Username (minimum 3 characters)'
                        value={this.state.username}
                        required
                        />

                        <label>Password</label>
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
                    <p id="login-p-tag"> Have an account already? <Link to="/login">Login here</Link></p>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        signupDispatch: user => dispatch(signup(user))
    }
}


export default connect(null, mapDispatchToProps)(Signup);