import React from 'react';
import { apiClient } from '../utils/api';
import { useEffect } from 'react';

const PokemonContext = React.createContext()

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = React.useState([]);
    const [favoritos, setFavoritos] = React.useState([])
    const [pokemonsFilter, setPokemonsFilter] = React.useState([])
    const [pages, setPages] = React.useState(0)

    useEffect(() => {

        const getPoke = async () => {
            const { data } = await apiClient.get(`/pokemon?limit=20&offset=${pages * 20}`)

            const pokemons = await Promise.all(data.results.map(async (item) => {

                const pokemon = await apiClient.get(item.url)
                return {
                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    types: pokemon.data.types.map(item => item.type.name),
                    image: pokemon.data.sprites.other.home.front_default,
                    isFavorite: favoritos.some(item => item.id == pokemon.data.id)
                }
            }))
            setPokemons(pokemons);
            setPokemonsFilter(pokemons)
        };

        getPoke()

    }, [pages]);

    const getDetallePokemon = async (id) => {
        const pokemon = await apiClient.get(`/pokemon/${id}`)
        return pokemon.data
    }

    const addFavorite = (id) => {
        const pokemon = pokemons.find(pokemon => pokemon.id == id)

        if (favoritos.every(favorito => favorito.name != pokemon.name)) {

            setPokemons((pokemons) => pokemons.map(pokemon => {
                return pokemon.id == id ? { ...pokemon, isFavorite: true } : pokemon
            }))

            setPokemonsFilter((pokemons) => pokemonsFilter.map(pokemon => {
                return pokemon.id == id ? { ...pokemon, isFavorite: true } : pokemon
            }))

            setFavoritos([...favoritos, { name: pokemon.name, image: pokemon.image, id: pokemon.id, types: pokemon.types }])
        }
    }

    return (
        <PokemonContext.Provider value={{
            getDetallePokemon, addFavorite, setPokemonsFilter, setPages,
            favoritos, pokemons, pokemonsFilter, pages
        }}>
            {children}
        </PokemonContext.Provider>
    );
}

export { PokemonContext, PokemonProvider };