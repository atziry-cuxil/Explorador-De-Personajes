import { Badge, Button, Card } from 'react-bootstrap';

const CardPokemon = ({ name, image, types }) => {
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
          <Button size="sm" variant="primary">
            Ver detalles
          </Button>
          <Button size="sm" variant="outline-dark">
            Agregar a Favorito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export { CardPokemon }