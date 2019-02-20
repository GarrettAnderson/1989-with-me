import React, { Component } from 'react'
import data from '../data/movies.json'
import Movie from './Movie'

class Movies extends Component {
  render() {
    console.log(data)
    return (
      <main>
        {data.results.map((movie) => {
          // let movieList = movie.results
          console.log(movie.results)
          return <Movie />
        })}
      </main>
    )
  }
}

export default Movies
