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
        <>
            <Container className="detalle-pokemon py-4">
                <Card className="pokemon-card shadow-sm">
                    <Row className="g-0 align-items-center">
                        <Col md={5} className="p-4 border-end">
                            <div className="text-center">
                                <div className="pokemon-number text-secondary mb-2">
                                    #{pokemon?.id?.toString().padStart(3, '0') || '000'}
                                </div>
                                <Image src={pokemon.sprites?.other?.home?.front_default} alt={pokemon?.name} fluid className="pokemon-image mb-3" />
                                <h2 className="text-capitalize pokemon-name mb-2">{pokemon?.name || 'Cargando...'}</h2>
                                <div className="pokemon-tags">
                                    {pokemon?.types?.map((typeItem) => (
                                        <Badge key={typeItem.type.name} bg="primary" className="me-1 text-capitalize">
                                            {typeItem.type.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <Card.Body className="p-4">
                                <Card.Title className="mb-4">Detalle del Pokémon</Card.Title>
                                <Row className="mb-3">
                                    <Col xs={6} className="mb-3">
                                        <span className="detail-label">Altura</span>
                                        <div>{pokemon?.height ? `${pokemon.height / 10} m` : '-'}</div>
                                    </Col>
                                    <Col xs={6} className="mb-3">
                                        <span className="detail-label">Peso</span>
                                        <div>{pokemon?.weight ? `${pokemon.weight / 10} kg` : '-'}</div>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col xs={6} className="mb-3">
                                        <span className="detail-label">Habilidades</span>
                                        <div className="text-capitalize">
                                            {pokemon?.abilities?.map((item) => item.ability.name).join(', ') || '-'}
                                        </div>
                                    </Col>
                                    <Col xs={6} className="mb-3">
                                        <span className="detail-label">Movimientos</span>
                                        <div className="pokemon-moves text-capitalize">
                                            {pokemon?.moves?.slice(0, 5).map((item) => item.move.name).join(', ') || '-'}
                                        </div>
                                    </Col>
                                </Row>
                                <div>
                                    <h5 className="mb-3">Estadísticas</h5>
                                    <Row className="pokemon-stats">
                                        {pokemon?.stats?.map((stat) => (
                                            <Col xs={6} key={stat.stat.name} className="mb-3">
                                                <div className="stat-name text-capitalize">{stat.stat.name}</div>
                                                <div className="stat-value">{stat.base_stat}</div>
                                                <div className="progress stat-progress">
                                                    <div
                                                        className="progress-bar bg-success"
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
            </Container>
            <NavLink to={'/personajes'}>
                <Button variant="outline-warning">Volver a Personajes</Button>
            </NavLink>
        </>
    );
}

export { DetallePokemon }