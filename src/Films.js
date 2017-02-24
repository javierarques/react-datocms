import React, { Component } from 'react'
import { Link} from 'react-router'
import datocmsClient from './DatoCmsClient'

class Films extends Component {
  state = {
    films: []
  }

  componentWillMount () {
    datocmsClient.getFilms()
      .then((films) => this.setState({ films }))
  }

  render() {
    const {films} = this.state
    console.log(films)
    const filmsList = films.map(({id, title}) =>
      <li className='Films-item' key={id}>
        <Link to={`/films/${id}`}>{title}</Link>
      </li>
    )

    return (
      <ul className="Films">
        {filmsList}
      </ul>
    );
  }
}

export default Films;
