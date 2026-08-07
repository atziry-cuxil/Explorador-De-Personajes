import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { Personajes } from './pages/Personajes';
import { PokemonProvider } from './context/pokemonContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/personajes' element={<Personajes />} />
            <Route path='/favoritos' />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </>
  )
}

export default App
