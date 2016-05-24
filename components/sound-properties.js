import React, { Component, PropTypes } from 'react'

class SoundProperties extends Component {
  render() {
    let {
      sound,
      handleSoundPropertyChange
    } = this.props;

    return <div className="properties">
    {sound.name}
      {sound.properties.map(function(property, i) {
        return <div key={i}>
          <label>{property.name}:</label>
          <input
            className="property-range"
            type="range"
            min="0"
            max="127"
            value={property.value}
            onChange={handleSoundPropertyChange.bind(null, i)}
          />
          <span className="values">
            {property.value}
          </span>
        </div>
      })}
    </div>
  }
}
export default SoundProperties
