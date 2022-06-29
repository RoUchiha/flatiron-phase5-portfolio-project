import React, { Component } from "react";
import Pokedex from "../components/Pokedex";
import '../App.css';
import { connect } from "react-redux";


class PokedexContainer extends Component {

    state = {
        allPokemon: this.props.pokemon
    }



    




    render() {

        return(



            <div>
                <h2 className="pokedex-header">.</h2>
                <Pokedex allPokemon={this.state.allPokemon} />
            </div>
            
                
            

            
        )
    }


}

const mapStateToProps = (state) => {
    return {
        current_user: state.users,
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps)(PokedexContainer);