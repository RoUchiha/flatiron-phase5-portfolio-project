import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Browser, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomeRedirect from './HomeRedirect';

class Home extends Component {


    render() {

        const logged_in = this.props.current_user;
        return (

            

            <div>

              
                <h1>Welcome to Pokesquad</h1>
                <h2>a Pokemon team creator</h2>

                <Login />

                <Signup />
                        
            </div>
    
            
        )
    }


}

const mapStateToProps = (state) => {
    return {
      current_user: state.users
    }
  }

export default connect(mapStateToProps)(Home);