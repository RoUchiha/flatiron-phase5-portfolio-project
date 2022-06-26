import React from 'react';
import { Card } from 'semantic-ui-react';

const Pokemon = ({ id, name, pokedex, sprite }) => {

    

    return (
        <Card>
            <div style={{border: '1px solid black'}} className='pokemon' id={id}>


                <div className='sprite'>
                    <img src={sprite} alt="sprite failed to load" />
                </div>

                <div className='pokemon-info'>

                    <div className='pokemon-name'>
                        {name}
                    </div>
                    
                    <div className='pokemon-pokedex'>
                        #{pokedex}
                    </div>

                </div>
            
            
            </div>

        </Card>
    )


}


export default Pokemon;