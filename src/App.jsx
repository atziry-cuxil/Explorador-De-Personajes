import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import { Home } from './pages/Home';
import { Personajes } from './pages/Personajes';
import { PokemonProvider } from './context/pokemonContext';
import { DetallePokemon } from './pages/DetallePokemon';
import { Favoritos } from './pages/Favoritos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <PokemonProvider>
        <header className="top-menu px-4 py-3">
          <div className="menu-inner mx-auto d-flex align-items-center justify-content-between">
            <span className="nav-brand">PokeDex Explorer</span>
            <nav className="menu-links d-flex gap-3 align-items-center">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Inicio
              </NavLink>
              <NavLink to="/personajes" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Catálogo
              </NavLink>
              <NavLink to="/favoritos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Favoritos
              </NavLink>
            </nav>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/personajes' element={<Personajes />} />
            <Route path='/detalle/:id' element={<DetallePokemon />} />
            <Route path='/favoritos' element={<Favoritos />} />
          </Routes>
        </main>
      </PokemonProvider>
    </BrowserRouter>
  );
}

export default App
