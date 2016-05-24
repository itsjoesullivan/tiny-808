import React, { Component, PropTypes } from 'react'

class TickContainer extends Component {
  render() {
    let {
      pattern,
      playing,
      cursor,
      handlePatternChange
    } = this.props;
    
    return <div>
      <div className="tick-container">
        {pattern.map(function(val, i) {
          if (playing && cursor === i) {
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
              onChange={handlePatternChange.bind(null, i)}
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
    </div>
  }
}

export default TickContainer
