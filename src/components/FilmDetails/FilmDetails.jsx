import React, { useEffect, useState } from 'react';
import { Button, Header, Modal} from 'semantic-ui-react';
import { StarShips } from '../StarShips';
import {Planets } from '../Planets';
import PropTypes, { arrayOf, string } from 'prop-types';

export const FilmDetails = ({ title, planets, opening_crawl, release_date, producer, director, starships }) => {

  const [open, setOpen] = useState(false);
  const [filmstarShips, setStarships] = useState([]);
  const [filmPlanets, setPlanets] = useState([]);
  const [showModal, setModal] = useState(false)

  const getStarShips = async () => {
    Promise.all(starships.map(starship => (
      fetch(starship)
      .then(responce => responce.json())
      .then(obj => setStarships(prev => [...prev, obj]))
    )))
  }

  const getPlanets = async () => {
    Promise.all(planets.map(planet => (
      fetch(planet)
      .then(responce => responce.json())
      .then(obj => setPlanets(prev => [...prev, obj])))
    ))
  }

  useEffect(() => {
    return () => {
      getStarShips();
      getPlanets();
    }
// eslint-disable-next-line
  }, [showModal])

  return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => {
          setOpen(true);
          setModal(true)
        }}
        open={open}
        size="tiny"
        trigger={<Button>Show details</Button>}
      >
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Producer: {producer}</p>
          <p>Directrors: {director}</p>
          <p>Release date: {release_date}</p>
          <Header>Description</Header>
          <p>{opening_crawl}</p>
        </Modal.Description>
        <br></br>
        <span>Starships:</span>
        <StarShips  starships={filmstarShips}/>
        <p>Planets:</p>
        <Planets planets={filmPlanets} />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


FilmDetails.propTypes = {
  title: PropTypes.string.isRequired,
  opening_crawl: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  planets: arrayOf(string).isRequired,
  starships: arrayOf(string).isRequired,
}