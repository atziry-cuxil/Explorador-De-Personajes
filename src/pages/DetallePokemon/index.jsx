import React, { useEffect } from 'react';
import { PokemonContext } from '../../context/pokemonContext';
import { useParams } from 'react-router';
import { Container, Row, Col, Card, Badge, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router';
import './DetallePokemon.css';

const DetallePokemon = () => {

    const { getDetallePokemon } = React.useContext(PokemonContext)
    const [pokemon, setPokemon] = React.useState({})
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            let response = await getDetallePokemon(id)
            setPokemon(response)
        }
        getData()
    }, [getDetallePokemon])

    return (
        <Container fluid className="detalle-pokemon py-5">
            <div className="detalle-header text-center mb-5">
                <span className="detalle-eyebrow">Detalle Pokémon</span>
                <h1 className="detalle-title">Información clara y precisa</h1>
                <p className="detalle-copy mx-auto">
                    Aquí verás todos los datos de tu Pokémon en un panel oscuro con texto blanco y bloques bien definidos.
                </p>
            </div>

            <Card className="pokemon-card shadow-sm">
                <Row className="g-0 align-items-center">
                    <Col md={5} className="p-4 border-end border-secondary border-opacity-10">
                        <div className="text-center text-md-start">
                            <div className="pokemon-number text-muted mb-2">
                                #{pokemon?.id?.toString().padStart(3, '0') || '000'}
                            </div>
                            <div className="image-frame mb-3 mx-auto mx-md-0">
                                <Image src={pokemon.sprites?.other?.home?.front_default} alt={pokemon?.name} fluid className="pokemon-image" />
                            </div>
                            <h2 className="text-capitalize pokemon-name text-black mb-2">{pokemon?.name || 'Cargando...'}</h2>
                            <div className="pokemon-tags mb-3 text-black">
                                {pokemon?.types?.map((typeItem) => (
                                    <Button key={typeItem.type.name} bg="secondary" className="me-1 text-capitalize text-black">
                                        {typeItem.type.name}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col md={7}>
                        <Card.Body className="p-4 bg-dark text-white rounded-end">
                            <Card.Title className="detalle-section-title mb-4">Detalle del Pokémon</Card.Title>
                            <Row className="mb-3 detail-grid">
                                <Col xs={6} className="mb-3 detail-card">
                                    <span className="detail-label">Altura</span>
                                    <div className="detail-value">{pokemon?.height ? `${pokemon.height / 10} m` : '-'}</div>
                                </Col>
                                <Col xs={6} className="mb-3 detail-card">
                                    <span className="detail-label">Peso</span>
                                    <div className="detail-value">{pokemon?.weight ? `${pokemon.weight / 10} kg` : '-'}</div>
                                </Col>
                                <Col xs={12} className="mb-3 detail-card">
                                    <span className="detail-label">Habilidades</span>
                                    <div className="detail-value text-capitalize">
                                        {pokemon?.abilities?.map((item) => item.ability.name).join(', ') || '-'}
                                    </div>
                                </Col>
                                <Col xs={12} className="mb-3 detail-card">
                                    <span className="detail-label">Movimientos</span>
                                    <div className="detail-value text-capitalize pokemon-moves">
                                        {pokemon?.moves?.slice(0, 5).map((item) => item.move.name).join(', ') || '-'}
                                    </div>
                                </Col>
                            </Row>
                            <div>
                                <h5 className="mb-3 stats-title">Estadísticas</h5>
                                <Row className="pokemon-stats">
                                    {pokemon?.stats?.map((stat) => (
                                        <Col xs={12} sm={6} key={stat.stat.name} className="mb-3 stat-block">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <div className="stat-name text-white-50 text-capitalize">{stat.stat.name}</div>
                                                <div className="stat-value">{stat.base_stat}</div>
                                            </div>
                                            <div className="progress stat-progress">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                                                    aria-valuenow={stat.base_stat}
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                />
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <div className="text-center mt-4">
                <NavLink to="/personajes" className="d-inline-block w-100 w-sm-auto">
                    <Button variant="outline-light" className="volver-btn px-4 py-2">
                        Volver a Personajes
                    </Button>
                </NavLink>
            </div>
        </Container>
    );
}

export { DetallePokemon }