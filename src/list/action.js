import axios from 'axios'
export const LOAD_MOVIES = 'LOAD_MOVIES'

export const loadMovies = () => {
  return dispatch => {
    axios
      .get('http://localhost:3000/movies')
      .then(response => dispatch(load(response)))
  }
}

const load = response => {
  return { type: LOAD_MOVIES, data: response.data }
}
