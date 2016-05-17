import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { machine, actions } = this.props

    return (
      <section className="main">
        <input
          type="range"
          value={machine.tempo}
          min="60"
          max="200"
          onChange={this.handleTempoChange.bind(this)}
        />
        {machine.tempo}
      </section>
    )
  }

  handleTempoChange(e) {
    this.props.actions.changeTempo(parseInt(e.target.value))
  }
}

MainSection.propTypes = {
  machine: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
