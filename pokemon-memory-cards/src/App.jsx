import { useState } from 'react'
import './App.css'
import PokemonMatt from './components/pokemonMatt'
import Header from './components/header.jsx'

function App() {
  //const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header />
      <PokemonMatt />

    </div>
  );
}

export default App
