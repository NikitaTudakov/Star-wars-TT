import React, { useState } from 'react';
import { PlanetAdditional } from './PlanetAdditional';
import PropTypes, { arrayOf, shape } from 'prop-types';

export const Planets = ({ planets }) => {
    const [opened, setOpened] = useState([]);

    const handleToggle = (key) => {
      setOpened(prevopened => (
        opened.includes(key) ? opened.filter(el => el !== key)
        : [...prevopened, key]
      ));
    };

  return (
    <ul className="planets__list list">
      {planets.map( planet => (
        <li
          className="list__item"
          key={planet.created}
          onClick={() => handleToggle(planet.created)}
        >
          <p>Name: {planet.name}</p>

          {opened.includes(planet.created) && (
            <PlanetAdditional planet={planet} />
          )}
        </li>
      ))}
    </ul>
  )
}

Planets.propTypes = {
  planets: arrayOf(shape({
    created: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired)
}