import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Browser, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import HomeRedirect from './HomeRedirect';
import { fetchPokemon } from '../actions/pokemonActions';

class Home extends Component {

    


    render() {

        const logged_in = this.props.current_user;
        return (

            

            <div className='home'>

            <br />
                <h1 className='welcome-main'>Welcome to Pokesquad</h1>
                <h2 className='welcome-sub'>a React/Rails Pokemon Team Creator</h2>

                <br />
                
                <br />
                <hr 
                    className='divider'
                />

                <Login />
                
                <br />
                <hr 
                    className='divider'
                />
                
                <Signup />

                <br />
                <hr 
                    className='divider'
                />
                        
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