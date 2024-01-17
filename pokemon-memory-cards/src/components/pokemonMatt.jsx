import react from 'react'
import PokemonCards from './pokemonCards'
import {info} from '../assets/images.js'

function PokemonMatt(){
    const Images = info()
    return(
        <div className='pokemon-matt'>
        {Images.map(({ name, background }) => (
      <PokemonCards image={name} background={background} />
    ))}
        </div>
    );
}

export default PokemonMatt