import react from 'react'
import styles from '../globals.css'

function PokemonCards(props){

    return(
            <img key="inc3" className= {styles.main} src={props.image} alt={props.background.background} style={{background: props.background}}></img> 
    );
}

export default PokemonCards