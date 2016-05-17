import { CHANGE_TEMPO } from '../constants/ActionTypes'

const initialState = {
  tempo: 120
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEMPO:
      return Object.assign({}, state, {tempo: action.tempo});
      break;
    default:
      return state;
      break;
  }
}
