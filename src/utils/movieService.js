const baseUrl = 'https://us-central1-react-app-2eff5.cloudfunctions.net/server/data/movies';

export const createMovie = (movie, token) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify(movie),
  }).then(response => response.json());
};

export const updateMovie = (id, movie, token) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': token,
    },
    body: JSON.stringify(movie),
  }).then(res => res.json());
};

export const getMovieById = (id) => {
  return fetch(`${baseUrl}/${id}`).then(res => res.json());
};