import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';



export const PlanetAdditional = ({planet}) => {

  return (
    <Card>
      <Card.Content>
        <Card.Header>Details</Card.Header>
        <Card.Description>
          <p>Climate: {planet.climate}</p>
          <p>Terrain: {planet.terrain}</p>
          <p>Population: {planet.population}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

PlanetAdditional.propTypes = {
  planet: PropTypes.shape({
    climate: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  }).isRequired
}