import React, { Component } from 'react';

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


    handleSubmit

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


export default Signup;