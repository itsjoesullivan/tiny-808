import React, { Component, PropTypes } from 'react'

class MenuActions extends Component {
  render() {
    let {
      handleSaveClick,
      handleGetLinkClick,
      handleClearClick
    } = this.props;

    return <div className="sub-header-actions">
      <button
        onClick={handleSaveClick}
      >
        Save
      </button>
      <button
        onClick={handleGetLinkClick}
      >
        Get link
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
