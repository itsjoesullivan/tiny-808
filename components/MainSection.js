import React, { Component, PropTypes } from 'react'
import audioListener from './../audio-listener';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.listener = audioListener;
    var thing = this.setActivePatternSection.bind(this);
    this.listener(this, this.setCursor.bind(this), this.setCursor.bind(this), thing);
    setInterval(function() {
      var state = this.props.machine;
      history.pushState(null, null, '#' + encodeURIComponent(JSON.stringify(state)));
    }.bind(this), 1000);
  }

  componentDidUpdate() {
    var thing = this.setActivePatternSection.bind(this);
    this.listener(this, this.setCursor.bind(this), thing);
  }

  render() {


    const { machine, actions } = this.props

    var swing = (<div><label>Swing:</label>
        <input
          type="range"
          value={machine.swing}
          min="0"
          max="100"
          onInput={this.handleSwingChange.bind(this)}
        />
        <span>{machine.swing}%</span>
        <br /></div>);
    swing = '';

    var modeSelector = '';
    var currentSound = machine.sounds[machine.activeSoundIndex];
    if (currentSound.modes.length > 1) {
      modeSelector = (<form className="mode-selector">
          {currentSound.modes.map(function(mode, i) {
            var checked = i === currentSound.currentModeIndex;
            return <span><input
              type="radio"
              onChange={this.handleSoundModeChange.bind(this, i)}
              name="instrument-mode" value={i} checked={checked}/>{mode.shortName}</span>
          }.bind(this))}
      </form>)
    }

    return (
      <section className="main">
        <h1>tiny-808</h1>
        <div>
          {machine.sounds.map(function(sound, i) {
            return <span className="range-name">{sound.modes[sound.currentModeIndex].shortName} </span>
          })}
          <br />
          <input
          className="sounds-range"
          type="range"
          min={0}
          max={machine.sounds.length - 1}
          value={machine.activeSoundIndex}
          step={1}
          onChange={this.handleActiveSoundChange2.bind(this)} />
        </div>
        <div>
          <label>Sound:</label>
          <select
            value={machine.activeSoundIndex}
            onChange={this.handleActiveSoundChange.bind(this)}
          >
            {machine.sounds.map(function(sound, i) {
              return <option
                value={i}
              >
                {sound.modes[sound.currentModeIndex].name}
              </option>
            }.bind(this))}
          </select>
          {modeSelector}
        </div>
        <br />
        <div className="properties">
        {machine.sounds[machine.activeSoundIndex].name}
          {machine.sounds[machine.activeSoundIndex].properties.map(function(property, i) {
            return <div>
              <label>{property.name}:</label>
              <input
                className="property-range"
                type="range"
                min="0"
                max="127"
                value={property.value}
                onChange={this.handleSoundPropertyChange.bind(this, i)}
              />
              <span className="values">
                {property.value}
              </span>
            </div>
          }.bind(this))}
        </div>
        <div className="tick-container">
          {machine.pattern[machine.activeSoundIndex][machine.activePatternSection].map(function(val, i) {
            if (machine.playing && machine.cursor === i) {
            var className = "highlighted";
            } else {
            var className = "";
            }
            return <span
              className={className}
            >
              <input
                type="checkbox"
                key={i}
                checked={!!val}
                onChange={this.handlePatternChange.bind(this, i)}
              />
            </span>
          }.bind(this))}
        </div>
          <br />
        <label>Tempo:</label>
        <input
          type="range"
          className="property-range"
          value={machine.tempo}
          min="60"
          max="200"
          onChange={this.handleTempoChange.bind(this)}
        />
        <span className="values">{machine.tempo} BPM</span>
      <br />
      <br />
      <div className="transport">
        <div>
          <button
            onClick={this.handlePlayClick.bind(this)}
          >
            {machine.playing ? "Pause" : "Play"}
          </button>
        </div>
        <form>
          A<input
            type="radio"
            name="pattern-mode"
            value="A"
            checked={machine.patternMode === "A"}
            onChange={this.handlePatternModeChange.bind(this, "A")}
            />
          AB<input
            type="radio"
            name="pattern-mode"
            value="AB"
            checked={machine.patternMode === "AB"}
            onChange={this.handlePatternModeChange.bind(this, "AB")}
            />
          B<input
            type="radio"
            name="pattern-mode"
            value="B"
            checked={machine.patternMode === "B"}
            onChange={this.handlePatternModeChange.bind(this, "B")}
            />
        </form>
      </div>
      </section>
    )
  }

  handleTempoChange(e) {
    this.props.actions.changeTempo(parseInt(e.target.value))
  }
  handleSwingChange(e) {
    this.props.actions.changeSwing(parseInt(e.target.value))
  }
  handlePatternChange(i) {
    this.props.actions.patternChange(i);
  }
  handlePlayClick() {
    this.props.actions.togglePlay();
  }
  handleActiveSoundChange(e) {
    this.props.actions.changeActiveSound(parseInt(e.target.value));
  }
  handleActiveSoundChange2(e) {
    this.props.actions.changeActiveSound(parseInt(e.target.value));
  }
  handleSoundPropertyChange(propertyIndex, e) {
    this.props.actions.changeSoundProperty(propertyIndex, parseInt(e.target.value));
  }
  handleSoundModeChange(index) {
    this.props.actions.changeSoundMode(index);
  }
  handlePatternModeChange(mode) {
    this.props.actions.changePatternMode(mode);
  }
  setCursor(cursor) {
    this.props.actions.setCursor(cursor);
  }
  setActivePatternSection(index) {
    this.props.actions.setActivePatternSectionIndex(index);
  }
  
}

MainSection.propTypes = {
  machine: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
