import React from "react";
import Pokemon from "./Pokemon";
import { Card } from 'semantic-ui-react';


const TeamCollection = ({ team }) => {

    <Card.Group itemsPerRow={6}>
        {team.map(team => (
           <Team key={team.id} team={team} /> ))}

    </Card.Group>

}


export default TeamCollection;