import * as types from '../constants/ActionTypes'

export function changeTempo(tempo) {
  return { type: types.CHANGE_TEMPO, tempo }
}
