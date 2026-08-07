import React from 'react';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <>
            <p>Bienvenido a Pantalla Principal</p>
            <NavLink to={'/personajes'} className={'btn btn-primary'} >
                Ir al Catalogo </NavLink >
            <NavLink to={'/catalogo'} className={'btn btn-dark'} >
                Ir a Favoritos </NavLink >

        </>
    )
}

export { Home }