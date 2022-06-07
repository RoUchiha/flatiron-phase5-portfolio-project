import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <form >
                <input 
                type="text"
                name="username"
                placeholder='Username (minimum 4 characters)'
                required
                />

                <input 
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