import { useState } from 'react'
import './App.css'
import {info} from './assets/images.js'
import PokemonCards from './components/pokemonCards'
import Header from './components/header.jsx'

function App() {
  //const [count, setCount] = useState(0)
  const Images = info()
  return (
    <div className="App">
      <Header />
      {Images.map(({ name, background }) => (
      <PokemonCards image={name} background={background} />
    ))}
    </div>
  );
}

export default App
