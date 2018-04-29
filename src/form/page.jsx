import React from 'react'
import PropTypes from 'prop-types'

const MyForm = (props) => {
  const onNameChange = ({target: {value}}) => {
    props.changedName(value)
  }

  return (
    <input type = 'text' onChange = {onNameChange} value = {props.name}/>
  )
}

MyForm.displayName = 'MyForm'

MyForm.propTypes = {
  name: PropTypes.string,
  changedName: PropTypes.func
}
export default MyForm
