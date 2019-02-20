import React, { Component } from 'react'
import Header from './components/Header'
import Movies from './components/Movies'
import Movie from './components/Movie'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movies />
      </div>
    )
  }
}

export default App
