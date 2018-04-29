import React from 'react'

const MyForm = (props) => {

  const onNameChange = ({target: {value}}) => {
    props.changedName(value)
  }

  return (
    <input type = 'text' onChange = {onNameChange} value = {props.name}/>
  )
}

MyForm.displayName = 'MyForm'
export default MyForm
