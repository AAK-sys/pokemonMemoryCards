import styles from './page.module.css'
import React from 'react'
import PokemonCards from './components/pokemonCards'
import {info} from './assets/images.js'
import pikachu from '../public/images/pikachu.png'

export default function Home() {
  const images = info();
  console.log(images[0]);
  return (
    <div className= {styles.main}>
      {images.map(({ name, background }) => (
      <PokemonCards image={pikachu} background={background} />
    ))}
    </div>
  )
}
