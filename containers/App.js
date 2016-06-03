import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../components/main-section'
import * as MachineActions from '../actions'

class App extends Component {
  render() {
    const { machine, actions } = this.props
    return (
      <div>
        <MainSection machine={machine} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    machine: state.machine
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MachineActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
