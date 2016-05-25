import * as types from '../constants/ActionTypes'

export function changeTempo(tempo) {
  return { type: types.CHANGE_TEMPO, tempo }
}

export function changeSwing(swing) {
  return { type: types.CHANGE_SWING, swing }
}

export function patternChange(index) {
  return { type: types.PATTERN_CHANGE, index }
}

export function togglePlay(index) {
  return { type: types.TOGGLE_PLAY }
}

export function changeActiveSound(index) {
  return { type: types.CHANGE_ACTIVE_SOUND, index }
}

export function changeSoundProperty(propertyIndex, value) {
  return { type: types.CHANGE_SOUND_PROPERTY, propertyIndex, value }
}
export function changePatternMode(mode) {
  return { type: types.CHANGE_PATTERN_MODE, mode }
}

export function setCursor(index) {
  return { type: "SET_CURSOR", index }
}

export function setActivePatternSectionIndex(index) {
  return { type: "SET_ACTIVE_PATTERN_SECTION_INDEX", index }
}

export function changeSoundMode(index) {
  return { type: "CHANGE_SOUND_MODE", index }
}

export function reset() {
  return { type: "RESET" }
}

export function copyPattern(index) {
  return { type: "COPY_PATTERN", index }
}

export function pastePattern(index) {
  return { type: "PASTE_PATTERN_TO_TARGET", index }
}

export function clearPattern(index) {
  return { type: "CLEAR_PATTERN", index }
}

export function copyInstrumentPattern(index) {
  return { type: "COPY_INSTRUMENT_PATTERN", index }
}

export function pasteInstrumentPattern(index) {
  return { type: "PASTE_INSTRUMENT_PATTERN_TO_TARGET", index }
}

export function clearInstrumentPattern(index) {
  return { type: "CLEAR_INSTRUMENT_PATTERN", index }
}
