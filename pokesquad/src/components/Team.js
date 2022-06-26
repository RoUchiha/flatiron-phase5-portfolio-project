import React from 'react';
import { Card } from 'semantic-ui-react';

import Pokemon from './Pokemon';



const Team = ({id, name, user_username, pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6}) => {

   

    const teamMembers = [];

    teamMembers.push(pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6)
   
    
    console.log('team', teamMembers)
    return (
        

        <div className='team'>

            <div className='team-info'>
                <div>
                   Team Name: {name}
                </div>

                <div>
                   Created by: {user_username}
                </div>
            </div>


            <div className='team-members'>
            {teamMembers.map(pokemon => (
                console.log('member', pokemon)
                      ))}
            </div>
            
        </div>
    )


}

export default Team;