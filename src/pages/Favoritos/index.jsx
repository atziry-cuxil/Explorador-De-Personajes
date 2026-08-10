import React from 'react';
import { PokemonContext } from '../../context/pokemonContext';
import { CardPokemon } from '../../componentes/CardPokemon';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router';
import './Favoritos.css';

const Favoritos = () => {
    const { favoritos } = React.useContext(PokemonContext)
    
    return (
        <Container fluid className="favoritos-page py-5">
            <div className="favoritos-header text-center mb-5">
                <span className="favoritos-eyebrow">Tus Pokemones</span>
                <h1 className="favoritos-title">Favoritos guardados</h1>
                <p className="favoritos-copy mx-auto">
                    Aquí se conservan tus mejores elecciones. Mantén tu colección cerca y regresa cuando quieras cargar más criaturas al equipo.
                </p>
                <NavLink to="/personajes" className="btn btn-outline-light mt-3">
                    Volver al Catálogo
                </NavLink>
            </div>

            {favoritos.length > 0 ? (
                <Row className="g-4 justify-content-center">
                    {favoritos.map((pokemon) => (
                        <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                            <CardPokemon {...pokemon} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <div className="no-favorites text-center text-white py-5 rounded-4 shadow-sm">
                    <p>No hay Pokemones Favoritos aún.</p>
                    <span>Explora el catálogo y marca tus favoritos para encontrarlos aquí.</span>
                </div>
            )}
        </Container>
    );
}

export { Favoritos }


