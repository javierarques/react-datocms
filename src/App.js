import React, { Component } from 'react'
import { SiteClient } from 'datocms-client'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.datocms = new SiteClient('99644b5eaa4af54e85bb')
    this.state = {
      films: []
    }
  }

  componentWillMount () {
    this.datocms.items.all({ 'filter[type]': 'film' })
      .then((films) => this.setState({ films }))
  }

  render() {
    const { films } = this.state
    const filmsList = films.map(({id, title}) => <li key={id}>{title}</li>)
    console.log(films)

    return (
      <ul>
        {filmsList}
      </ul>
    );
  }
}

export default App;
