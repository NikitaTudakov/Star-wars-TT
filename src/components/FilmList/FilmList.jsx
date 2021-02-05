import React from 'react';
import { FilmCard } from '../FilmCard';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';



export const FilmList = ({ films }) => (
  <Card.Group 
      itemsPerRow={3}
      stackable
      
    >
      {films.map(film => (
        <Card key={film.episode_id}><FilmCard film={film} /></Card>
        ))}
  </Card.Group>
)

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    episode_id: PropTypes.number.isRequired,
  }))
}