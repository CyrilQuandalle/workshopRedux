import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as formActionCreator from './action'
import MyForm from './page'

class FormContainer extends Component {
  render () {
    return (
      <MyForm {...this.props}/>
    )
  }
}

function mapStateToProps (state) {
  return {
    name: state.name
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(formActionCreator, dispatch)
}

FormContainer.displayName = 'FormContainer'
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)
