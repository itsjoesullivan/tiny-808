import React, { Component, PropTypes } from 'react'
import audioListener from './../audio-listener';

import PatternSelector from './pattern-selector';
import SoundSelector from './sound-selector';
import SoundProperties from './sound-properties';
import MenuActions from './menu-actions';
import TickContainer from './tick-container';

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.listener = audioListener;
    this.listener(this,
                  this.setCursor.bind(this),
                  this.setActivePatternSection.bind(this),
                  this.getActivePatternSection.bind(this));
    document.addEventListener("visibilitychange",
                              this.handleVisibilityChange.bind(this),
                              false);
  }


  componentDidUpdate() {
    this.listener(this,
      this.setCursor.bind(this),
      this.setActivePatternSection.bind(this),
      this.getActivePatternSection.bind(this));
  }

  render() {


    const { machine, actions } = this.props

    var warning = '';
    if (/Firefox/.test(navigator.userAgent)) {
      warning = <p><i>For Firefox users: some of the drum synths, including the kick, aren't working very well. Hopefully I can improve this situation soon. Until then the sound is muted to avoid damaging your speakers or ears. - Joe</i></p>
    }

    return (
      <section className="main">
        <h1>tiny-808</h1>
        {warning}
        <MenuActions
          handleSaveClick={function() {
            var state = this.props.machine;
            history.pushState(null, null, '#' + encodeURIComponent(JSON.stringify(state)));
          }.bind(this)}
          handleGetLinkClick={function() {
            var state = this.props.machine;
            var url = document.location.protocol + "//" +
              document.location.host + document.location.pathname +
              "#" + encodeURIComponent(JSON.stringify(state));
            url = encodeURIComponent(url);
            window.open("http://tinyurl.com/api-create.php?url=" + url,
                        "_blank",
                        "width=300,height=100");
          }.bind(this)}
          handleClearClick={this.handleResetClick.bind(this)}
        />
        <SoundSelector
          sounds={machine.sounds}
          currentSound={machine.sounds[machine.activeSoundIndex]}
          handleSoundModeChange={this.handleSoundModeChange.bind(this)}
          activeSoundIndex={machine.activeSoundIndex}
          handleActiveSoundChange={this.handleActiveSoundChange.bind(this)}
        />
        <br />
        <SoundProperties
          sound={machine.sounds[machine.activeSoundIndex]}
          handleSoundPropertyChange={this.handleSoundPropertyChange.bind(this)}
        />
        <TickContainer
          pattern={machine.pattern[machine.activeSoundIndex][machine.activePatternSection]}
          handlePatternChange={this.handlePatternChange.bind(this)}
          playing={machine.playing}
          cursor={machine.cursor}
        />
        <br />
        <div>
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
        </div>
      <br />
      <div className="transport">
        <div>
          <button
            onClick={this.handlePlayClick.bind(this)}
          >
            {machine.playing ? "Pause" : "Play"}
          </button>
        </div>
        <PatternSelector
          activePatternSection={machine.activePatternSection}
          patternMode={machine.patternMode}
          handlePatternModeChange={this.handlePatternModeChange.bind(this)}
          copyPattern={this.props.actions.copyPattern.bind(this)}
          pastePattern={this.props.actions.pastePattern.bind(this)}
          clearPattern={this.props.actions.clearPattern.bind(this)}
        />
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
