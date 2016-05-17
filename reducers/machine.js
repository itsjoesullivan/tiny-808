import { CHANGE_TEMPO, PATTERN_CHANGE } from '../constants/ActionTypes'

const initialState = {
  tempo: 120,
  swing: 0,
  pattern: [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  ],
  activeSoundIndex: 0,
  activePatternSection: 0
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEMPO:
      return Object.assign({}, state, {tempo: action.tempo});
      break;
    case PATTERN_CHANGE:
      var newState = Object.assign({}, state);

      var pattern = newState.pattern[newState.activeSoundIndex][newState.activePatternSection];
      if (pattern[action.index] === 0) {
        pattern[action.index] = 1;
      } else {
        pattern[action.index] = 0;
      }
      return newState;
      break;
    default:
      return state;
      break;
  }
}
