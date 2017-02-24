import React, { Component } from 'react'
import datocmsClient from './DatoCmsClient'

class Film extends Component {
  state = {
    film: {}
  }

  componentWillMount () {
    datocmsClient.getFilm(this.props.params.filmId)
      .then((film) => this.setState({ film }))
  }

  render () {
    const { title, plot } = this.state.film

    return (
      <div className='Film'>
        <h1>{title}</h1>
        <p>{plot}</p>
      </div>
    )
  }
}

export default Film
