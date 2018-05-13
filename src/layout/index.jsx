import React from 'react'
import FormContainer from '../form'
import ListContainer from '../list'
import style from './layout.css'

const MovieLayout = () => {
  return (
    <div className={style.movieLayout}>
      <FormContainer />
      <ListContainer />
    </div>
  )
}

export default MovieLayout
