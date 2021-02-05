import React, { useState, useEffect } from 'react';
import { FilmList } from './components/FilmList';
import { getAllFilms } from './api';
import { Button, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getAllFilms()
    .then(result => setFilms(result));
  }, []);

  const sortByName = () => {
    setFilms([...films].sort((film1, film2) => (
      film1.title.localeCompare(film2.title)
    )))
  };

  const getfilteredFilms = () => (
    films.filter(film => (
      film.title.toLowerCase().includes(query.toLowerCase())))
  )

  const filteredFilms = getfilteredFilms();

  return(
    <Container >
      <div className="ui input">
        <input
          type="text"
          placeholder="find a movie..."
          value={query}
          onChange={event => setQuery(event.target.value)}/>
      </div>
      <Button
        basic color='grey'
        onClick={sortByName}>
        Sort by Title
      </Button>
      <FilmList films={filteredFilms}/>
    </Container>
  )
}

export default App;
