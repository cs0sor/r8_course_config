import App from './App'
import React from 'react'
import * as actions from '../actions/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Container = (props) =>
    <App {...props}/>

const mapStateToProps = (state, ownProps) => ({
  aList: state.defaultReducer.aList,
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



