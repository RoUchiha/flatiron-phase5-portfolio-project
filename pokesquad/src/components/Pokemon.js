import React from 'react';
import { Card } from 'semantic-ui-react';

const Pokemon = ({ key, name, pokedex, sprite }) => {

    const styles = {
        border: '1px solid black'
    }
        

    return (
        <Card>
            <div style={{border: '1px solid black'}} className='pokemon' key={key}>


                <div className='sprite'>
                    <img src={sprite} alt="sprite failed to load" />
                </div>

                <div className='pokemon-info'>

                    <div className='pokemon-name'>
                        {name.toUpperCase()}
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