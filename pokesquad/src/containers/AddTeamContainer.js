import React, { Component } from 'react';
import '../App.css'
import AddNewTeam from "../components/AddTeam";
import Pokedex from "./Pokedex";
import { Container } from 'semantic-ui-react'


class AddTeamContainer extends Component {


    render() {

        return (

            <div>
                <br />
                <h2 className='add-team-title'>Create a new team!</h2>
            
            <Container>

                <AddNewTeam />

                <br />

                <div className='add-team-pokedex'>
                <Pokedex />
                </div>

            </Container>
            </div>
        )
    }

}




export default AddTeamContainer;