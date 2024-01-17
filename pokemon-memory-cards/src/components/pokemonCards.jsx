import react from 'react'


function PokemonCards(props){

    return(
            <img src={props.image} alt={props.background.background} className='card-image' style={{background: props.background}}></img> 
    );
}

export default PokemonCards