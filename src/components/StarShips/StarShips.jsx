import React, { useState } from 'react';
import {ShipsAdditional } from './ShipsAdditional';
import PropTypes, { arrayOf, shape } from 'prop-types';
import './StarShips.scss';

export const StarShips = ({ starships }) => {
  const [opened, setOpened] = useState([])

    const handleToggle = (key) => {
      setOpened(prevopened => 
        opened.includes(key) ? opened.filter(el => el !== key)
        : [...prevopened, key]
      );
    };

  return(
    <ol className='starships__list list'>
      {starships.map( starship => (
          <li key={starship.created}
              className='list__item'
          >
            <p onClick={() => handleToggle(starship.created)}>
              Name: {starship.name}
            </p>
            
            {opened.includes(starship.created) && (
              <ShipsAdditional starship={starship}/>
            )}
          </li>
      ))}
    </ol>
  )
}

StarShips.propTypes = {
  starships: arrayOf(shape({
    created: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired)
}
