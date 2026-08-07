import React from 'react';
import { apiClient } from '../utils/api';

const PokemonContext = React.createContext()

const PokemonProvider = ({ children }) => {

    const getPokemons = async () => {

        const { data } = await apiClient.get('/pokemon', {params: {limit: 40}})

        const pokemons = await Promise.all(data.results.map(async (item) => {
            const pokemon = await apiClient.get(item.url)
            return {
                name: pokemon.data.name,
                types: pokemon.data.types.map(item => item.type.name),
                image: pokemon.data.sprites.other.home.front_default
            }
        }))

        return pokemons
    }

    return (
        <PokemonContext.Provider value={{ getPokemons }}>
            {children}
        </PokemonContext.Provider>
    );
}

export { PokemonContext, PokemonProvider };