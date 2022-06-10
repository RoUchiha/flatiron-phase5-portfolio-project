import React, { Component } from 'react';
import '../App.css'
import AddNewTeam from "../components/AddTeam";
import Pokedex from "./Pokedex";


class AddTeamContainer extends Component {


    render() {

        return (
            <div>
                <AddNewTeam />
            </div>
        )
    }

}




export default AddTeamContainer;