import React, { useEffect } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { CardPokemon } from '../../componentes/CardPokemon';
import { PokemonContext } from '../../context/pokemonContext';
import './Personajes.css';

const Personajes = () => {
    const { getPokemons } = React.useContext(PokemonContext);
    const [pokemons, setPokemons] = React.useState([]);
    //const [buscarPoke, setBuscarPoke] = React.useState('')
    const [pokemonsFilter, setPokemonsFilter] = React.useState([])

    useEffect(() => {
        const getPoke = async () => {
            let pokemonsApi = await getPokemons();
            setPokemons(pokemonsApi);
            setPokemonsFilter(pokemonsApi)
        };

        getPoke();
    }, [getPokemons]);


    const buscador = (event) => {
        const pokemonEncontrados = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setPokemonsFilter(pokemonEncontrados)
        //setBuscarPoke(event.target.value)
    }

    return (

        <Container fluid className="personajes-page py-5">
            <div className="catalog-header text-center text-white mb-5">
                <span className="subtitle d-inline-block mb-3">Catálogo Pokemon</span>
                <h1 className="title mb-3">Explora tus personajes favoritos</h1>
                <p className="lead text-light mx-auto catalog-description">
                    Descubre cada Pokemon, conoce sus tipos y disfruta una experiencia de colección con estilo.
                </p>
            </div>

            <Row className="justify-content-center mb-5">
                <Col xs={12} md={8} lg={6}>
                    <Form className="search-form p-3 rounded-4 shadow-sm bg-white bg-opacity-90">
                        <div className="d-flex align-items-center gap-2">
                            <Form.Control
                                type="search"
                                placeholder="Busca por nombre..."
                                className="search-input rounded-pill border-0 px-4 py-3"
                                //value={buscarPoke}
                                onChange={(event) => buscador(event)}
                            />
                        </div>
                    </Form>
                </Col>
            </Row>

            <Row className="g-4 justify-content-center">
                {pokemons.length === 0 ? (
                    <Col xs={12} className="text-center">
                        <Spinner animation="border" variant="light" />
                    </Col>
                ) : (
                    pokemonsFilter.map((pokemon) => (
                        <Col key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
                            <CardPokemon {...pokemon} />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export { Personajes }