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
        />
      </label>
    </form>
  }
}

export default PatternSelector
