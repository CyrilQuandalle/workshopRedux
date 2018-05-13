import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as listActionCreator from './action'
import { connect } from 'react-redux'
import MovieList from './page'

class ListContainer extends Component {
  render () {
    return <MovieList {...this.props} />
  }
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(listActionCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
