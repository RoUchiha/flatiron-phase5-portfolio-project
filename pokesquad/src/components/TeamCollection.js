import React, { Component } from "react";
import Pokemon from "./Pokemon";
import { Card } from 'semantic-ui-react';
import Team from "./Team";


class TeamCollection extends Component {



    state = {
        pokemon1: {},
        pokemon2: {},
        pokemon3: {},
        pokemon4: {},
        pokemon5: {},
        pokemon6: {}
    }


    componentDidMount() {

        fetch(`http://localhost:4000/pokemons/${this.props.pokemon1}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                pokemon1: data
            })
            )
        .catch(error => console.log("fetch team member", error))



        fetch(`http://localhost:4000/pokemons/${this.props.pokemon2}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                pokemon2: data
            })
            )
        .catch(error => console.log("fetch team member", error))



        fetch(`http://localhost:4000/pokemons/${this.props.pokemon3}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                pokemon3: data
            })
            )
        .catch(error => console.log("fetch team member", error))



        fetch(`http://localhost:4000/pokemons/${this.props.pokemon4}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                pokemon4: data
            })
            )
        .catch(error => console.log("fetch team member", error))



        fetch(`http://localhost:4000/pokemons/${this.props.pokemon5}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                pokemon5: data
            })
            )
        .catch(error => console.log("fetch team member", error))



        fetch(`http://localhost:4000/pokemons/${this.props.pokemon6}`)
        .then(response => response.json())
        .then(data => 
            this.setState({
                pokemon6: data
            })
            )
        .catch(error => console.log("fetch team member", error))

    }



render() {
    return (
    <Card.Group itemsPerRow={3}>
        
        <Team id={this.props.id} name={this.props.name} user_username={this.props.user_username} pokemon1={this.state.pokemon1} pokemon2={this.state.pokemon2} pokemon3={this.state.pokemon3} pokemon4={this.state.pokemon4} pokemon5={this.state.pokemon5} pokemon6={this.state.pokemon6} />

    </Card.Group>
    )

}

}


export default TeamCollection;