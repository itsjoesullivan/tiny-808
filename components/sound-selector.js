import React, { Component, PropTypes } from 'react'

class SoundSelector extends Component {
  render() {
    let {
      sounds,
      currentSound,
      handleSoundModeChange,
      activeSoundIndex,
      handleActiveSoundChange
    } = this.props

    let modeSelector = '';
    if (currentSound.modes.length > 1) {
      modeSelector = <form className="mode-selector">
        {currentSound.modes.map(function(mode, i) {
          let checked = i === currentSound.currentModeIndex;
          return <span key={i} ><input
            type="radio"
            onChange={handleSoundModeChange.bind(null, i)}
            name="instrument-mode"
            value={i}
            checked={checked}
          />
            {mode.shortName}
          </span>
        })}
      </form>
    }

    return <div>
      <div className="range-selector-container">
        {sounds.map(function(sound, i) {
          return <span
            key={i}
            className="range-name">
              {sound.modes[sound.currentModeIndex].shortName}
          </span>
        })}
        <br />
        <input
          className="sounds-range"
          type="range"
          min={0}
          max={sounds.length - 1}
          value={activeSoundIndex}
          step={1}
          onChange={handleActiveSoundChange}
        />
      </div>
      <div>
        <label>Sound:</label>
        <select
          value={activeSoundIndex}
          onChange={handleActiveSoundChange}
        >
          {sounds.map(function(sound, i) {
            return <option
              value={i}
              key={i}
            >
              {sound.modes[sound.currentModeIndex].name}
            </option>
          })}
        </select>
        {modeSelector}
      </div>
    </div>
  }
}
export default SoundSelector
