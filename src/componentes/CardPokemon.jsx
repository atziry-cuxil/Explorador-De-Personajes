import { Badge, Button, Card } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router';
import { PokemonContext } from '../context/pokemonContext';
import React from 'react';

const CardPokemon = ({ name, image, types, id, isFavorite }) => {
  const { addFavorite } = React.useContext(PokemonContext)

  return (
    <Card className="pokemon-card h-100 shadow-sm border-0">
      <div className="card-image-wrapper">
        <Card.Img className="pokemon-card-img" variant="top" src={image} />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-capitalize mb-3">{name}</Card.Title>

        <div className="mb-3 type-badge-group">
          {types.map((type) => (
            <Badge
              key={type}
              bg="secondary"
              className={`type-badge text-capitalize px-2 py-1 me-2 mb-2 type-${type.toLowerCase()}`}
            >
              {type}
            </Badge>
          ))}
        </div>

        <div className="mt-auto d-grid gap-2">
          <NavLink to={`/detalle/${id}`}>
            <Button size="lg" variant="primary"  >
              Ver detalles
            </Button>
          </NavLink  >


          {isFavorite != undefined &&
            <Button size="sm" variant={isFavorite ? 'btn btn-danger' : 'btn btn-dark'} onClick={() => {
              addFavorite(id)
            }}>
              Agregar a Favorito
            </Button>
          }

        </div>
      </Card.Body>
    </Card>
  );
};

export { CardPokemon }