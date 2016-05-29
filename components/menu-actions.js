import React, { Component, PropTypes } from 'react'

class MenuActions extends Component {
  render() {
    let {
      handleSaveClick,
      handleGetLinkClick,
      handleClearClick
    } = this.props;
    /*
      <button
        onClick={handleSaveClick}
      >
        Save
      </button>
       */

    return <div className="sub-header-actions">
      <button
        onClick={handleGetLinkClick}
      >
        Get a link to your rhythm
      </button>
      <button
        onClick={handleClearClick}
      >
        Clear
      </button>
    </div>
  }
}

export default MenuActions
