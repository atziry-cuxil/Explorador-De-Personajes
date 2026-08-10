import React from 'react';
import { apiClient } from '../utils/api';
import { useEffect } from 'react';

const PokemonContext = React.createContext()

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = React.useState([]);
    const [favoritos, setFavoritos] = React.useState([])
    const [pokemonsFilter, setPokemonsFilter] = React.useState([])
    const [paginacion, setPaginacion] = React.useState([])
    //{ params: { limit: 60 } }

    useEffect(() => {

        const getPoke = async () => {

            const { data } = await apiClient.get('/pokemon?limit=1025')

            const pokemons = await Promise.all(data.results.map(async (item) => {
                const pokemon = await apiClient.get(item.url)
                return {
                    id: pokemon.data.id,
                    name: pokemon.data.name,
                    types: pokemon.data.types.map(item => item.type.name),
                    image: pokemon.data.sprites.other.home.front_default,
                    isFavorite: false
                }
            }))

            paginate(pokemons)
            setPokemons(pokemons);
        };

        const paginate = (pokemons) => {

            const limit = 20
            const paginado = []

            for (let i = 0; i < pokemons.length; i += parseInt(limit)) {
                paginado.push(pokemons.slice(i, i + parseInt(limit)))
            }
            setPokemonsFilter(paginado[0])
            setPaginacion(paginado)
        }

        getPoke()

    }, []);

    const getDetallePokemon = async (id) => {
        const pokemon = await apiClient.get(`/pokemon/${id}`)
        return pokemon.data
    }

    const addFavorite = (id) => {
        const pokemon = pokemons.find(pokemon => pokemon.id == id)

        setPokemons((pokemons) => pokemons.map(pokemon => {
            return pokemon.id == id ? { ...pokemon, isFavorite: true } : pokemon
        }))

        setPokemonsFilter((pokemons) => pokemonsFilter.map(pokemon => {
            return pokemon.id == id ? { ...pokemon, isFavorite: true } : pokemon
        }))

        if (favoritos.every(favorito => favorito.name != pokemon.name)) {
            setFavoritos([...favoritos, { name: pokemon.name, image: pokemon.image, id: pokemon.id, types: pokemon.types }])
        }
    }





    return (
        <PokemonContext.Provider value={{ getDetallePokemon, addFavorite, setPokemonsFilter, favoritos, pokemons, pokemonsFilter, paginacion }}>
            {children}
        </PokemonContext.Provider>
    );
}

export { PokemonContext, PokemonProvider };