import React, { Component, PropTypes } from 'react'
import audioListener from './../audio-listener';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.listener = audioListener;
    this.listener(this,
                  this.setCursor.bind(this),
                  this.setActivePatternSection.bind(this),
                  this.getActivePatternSection.bind(this));
    document.addEventListener("visibilitychange", this.handleVisibilityChange.bind(this), false);
  }


  componentDidUpdate() {
    this.listener(this,
                  this.setCursor.bind(this),
                  this.setActivePatternSection.bind(this),
                  this.getActivePatternSection.bind(this));
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
            return <span key={i} ><input
              type="radio"
              onChange={this.handleSoundModeChange.bind(this, i)}
              name="instrument-mode" value={i} checked={checked}/>{mode.shortName}</span>
          }.bind(this))}
      </form>)
    }

    var warning = '';
    if (/Firefox/.test(navigator.userAgent)) {
      warning = <p><i>For Firefox users: some of the drum synths, including the kick, aren't working very well. Hopefully I can improve this situation soon. Until then the sound is muted to avoid damaging your speakers or ears. - Joe</i></p>
    }

    return (
      <section className="main">
        <h1>tiny-808</h1>
        {warning}
        <div className="sub-header-actions">
          <button
            onClick={function() {
              var state = this.props.machine;
              history.pushState(null, null, '#' + encodeURIComponent(JSON.stringify(state)));
            }.bind(this)}
          >Save
          </button>
          <button
            onClick={function() {
              var state = this.props.machine;
              var url = document.location.protocol + "//" +
                document.location.host + document.location.pathname +
                "#" + encodeURIComponent(JSON.stringify(state));
              url = encodeURIComponent(url);
              window.open("http://tinyurl.com/api-create.php?url=" + url,
                          "_blank",
                          "width=300,height=100");
            }.bind(this)}
          >Get link
          </button>
          <button
            onClick={this.handleResetClick.bind(this)}
          >
            Clear
          </button>
        </div>
        <div className="range-selector-container">
          {machine.sounds.map(function(sound, i) {
            return <span key={i} className="range-name">{sound.modes[sound.currentModeIndex].shortName} </span>
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
                key={i}
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
            return <div key={i}>
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
              key={i}
              className={className}
            >
              <input
                type="checkbox"
                checked={!!val}
                onChange={this.handlePatternChange.bind(this, i)}
              />
            </span>
          }.bind(this))}
        </div>
        <div className="quarters">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
        <form className="pattern-selector">
          <label
            className={machine.activePatternSection === 0 ? "active" : ""}
          >
            A
          <input
            type="radio"
            name="pattern-mode"
            value="A"
            checked={machine.patternMode === "A"}
            onChange={this.handlePatternModeChange.bind(this, "A")}
          />
          </label>
          <label
          >
            AB
          <input
            type="radio"
            name="pattern-mode"
            value="AB"
            checked={machine.patternMode === "AB"}
            onChange={this.handlePatternModeChange.bind(this, "AB")}
            />
          </label>
          <label
            className={machine.activePatternSection === 1 ? "active" : ""}
          >
            B
          <input
            type="radio"
            name="pattern-mode"
            value="B"
            checked={machine.patternMode === "B"}
            onChange={this.handlePatternModeChange.bind(this, "B")}
            />
          </label>
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
  handleResetClick() {
    this.props.actions.reset();
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
  getActivePatternSection() {
    return this.props.machine.activePatternSection;
  }
  handleVisibilityChange() {
    if (this.props.machine.playing && document.hidden) {
      this.props.actions.togglePlay();
    }
  }
  
}

MainSection.propTypes = {
  machine: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
