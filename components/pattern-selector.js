import React, { Component, PropTypes } from 'react'

class PatternSelector extends Component {
  render() {
    let {
      activePatternSection,
      patternMode,
      handlePatternModeChange
    } = this.props

    return <form className="pattern-selector">
      <label
        className={activePatternSection === 0 ? "active" : ""}
      >
        A
      <input
        type="radio"
        name="pattern-mode"
        value="A"
        checked={patternMode === "A"}
        onChange={handlePatternModeChange.bind(null, "A")}
        onKeyDownCapture={this.handleKeyDown.bind(this, 0)}
      />
      </label>
      <label
      >
        AB
      <input
        type="radio"
        name="pattern-mode"
        value="AB"
        checked={patternMode === "AB"}
        onChange={handlePatternModeChange.bind(null, "AB")}
        />
      </label>
      <label
        className={activePatternSection === 1 ? "active" : ""}
      >
        B
      <input
        type="radio"
        name="pattern-mode"
        value="B"
        checked={patternMode === "B"}
        onChange={handlePatternModeChange.bind(null, "B")}
        onKeyDownCapture={this.handleKeyDown.bind(this, 1)}
        />
      </label>
    </form>
  }
  handleKeyDown(index, e) {
    if (e.metaKey || e.ctrlKey) {
      if (e.shiftKey) {
        switch (e.which) {
          case 67:
            e.preventDefault()
            this.props.copyPattern(index);
            break;
          case 86:
            e.preventDefault()
            this.props.pastePattern(index);
            break;
          case 88:
            e.preventDefault()
            this.props.copyPattern(index);
            this.props.clearPattern(index);
            break;
        }
      } else {
        switch (e.which) {
          case 67:
            this.props.copyInstrumentPattern(index);
            break;
          case 86:
            this.props.pasteInstrumentPattern(index);
            break;
          case 88:
            this.props.copyInstrumentPattern(index);
            this.props.clearInstrumentPattern(index);
            break;
        }
      }
    }
  }
}

export default PatternSelector
