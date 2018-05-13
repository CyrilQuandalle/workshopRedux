import React, { Component } from 'react'

class MovieList extends Component {
  componentWillMount () {
    console.log('mount')
    this.props.loadMovies()
  }
  render () {
    return 'tutu'
  }
}

export default MovieList
