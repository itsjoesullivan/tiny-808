import * as types from '../constants/ActionTypes'

export function changeTempo(tempo) {
  return { type: types.CHANGE_TEMPO, tempo }
}

export function patternChange(index) {
  return { type: types.PATTERN_CHANGE, index }
}
