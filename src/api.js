const API_URL = 'https://swapi.dev/api';

export function getAllFilms() {
  return fetch(`${API_URL}/films/`)
    .then(response => response.json())
    .then(obj => obj.results)
}