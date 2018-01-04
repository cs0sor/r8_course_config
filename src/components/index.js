import App from './App'
import React from 'react'
import * as actions from '../actions/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Container = (props) =>
    <App {...props}/>

const mapStateToProps = (state, ownProps) => ({
  qualifications: state.defaultReducer.qualifications,
  groups: state.defaultReducer.groups,
  criteria: state.defaultReducer.criteria,
  units: state.defaultReducer.units,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      ...actions,
    },
    dispatch
  )

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Container)

export default AppContainer



