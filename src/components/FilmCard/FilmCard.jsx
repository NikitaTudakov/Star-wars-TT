import React from 'react';
import { Card } from 'semantic-ui-react';
import { FilmDetails } from '../FilmDetails';
import PropTypes from 'prop-types';


export const FilmCard = ({ film }) => {

  return (
    <>
      <Card.Content>
        <Card.Header>{film.title}</Card.Header>
        <Card.Description>
          <br></br>
          <p>{film.opening_crawl}</p>
        </Card.Description>
      </Card.Content>

      <FilmDetails
        {...film}
      />
    </>
  )
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    opening_crawl: PropTypes.string.isRequired,
  })
}