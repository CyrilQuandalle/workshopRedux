import { CHANGE_NAME } from './action'

export const initial_state = {
  name: ''
}

export default function (state = initial_state, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.name}

    default:
      return state
  }
}
