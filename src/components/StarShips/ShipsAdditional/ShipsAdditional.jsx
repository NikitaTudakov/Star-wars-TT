import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';



export const ShipsAdditional = ({starship}) => (
  <Card>
    <Card.Content>
      <Card.Header>Additional info</Card.Header>
      <Card.Description>
        <p>Model: {starship.model}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
        <p>Cost: {starship.cost_in_credits}</p>
      </Card.Description>
    </Card.Content>
  </Card>
);

ShipsAdditional.propTypes = {
  starship: PropTypes.shape({
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
  }).isRequired
}