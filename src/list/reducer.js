import { LOAD_MOVIES } from './action'

export const initialState = {
  movies: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, movies: action.data }

    default:
      return state
  }
}
