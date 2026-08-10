import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router';
import './Home.css';

const Home = () => {
    
    return (
        <section className="home-hero d-flex align-items-center">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg={6} className="text-white hero-copy pe-lg-5">
                        <span className="hero-eyebrow">Bienvenido a tu PokeDex</span>
                        <h1 className="hero-title mb-4">Tu catálogo de Pokémon con estilo y personalidad.</h1>
                        <p className="hero-text mb-4">
                            Explora, filtra y descubre las criaturas más icónicas del mundo Pokémon. Una experiencia visual que combina velocidad, color y diversión.
                        </p>
                        <div className="d-flex flex-wrap gap-3 hero-actions">
                            <NavLink to="/personajes" className="btn btn-primary btn-xl">
                                Ver Catálogo
                            </NavLink>
                            <NavLink to="/favoritos" className="btn btn-outline-light btn-xl">
                                Mis Favoritos
                            </NavLink>
                        </div>
                    </Col>
                    <Col lg={5} className="hero-glow mt-5 mt-lg-0">
                        <div className="hero-card p-4 rounded-4 shadow-lg">
                            <div className="hero-card-header mb-3">
                                <span className="hero-chip">PokeDex</span>
                                <h2 className="hero-card-title">Explora y colecciona</h2>
                            </div>
                            <p className="hero-card-text mb-4">
                                Avanza desde la página principal hacia un catálogo lleno de tarjetas con personalidad, o visita tus favoritos directamente.
                            </p>
                            <div className="hero-stat-grid">
                                <div>
                                    <strong>151</strong>
                                    <p>Pokemones listos</p>
                                </div>
                                <div>
                                    <strong>3</strong>
                                    <p>Vistas disponibles</p>
                                </div>
                                <div>
                                    <strong>100%</strong>
                                    <p>Experiencia inmersiva</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export { Home }