import React, { Component } from 'react'
import data from '../data/movies.json'
import Movie from './Movie'

class Movies extends Component {
  render() {
    console.log(data)
    return (
      <main className="main-container">
        {data.results.map((movie) => {
          // let movieList = movie.results
          console.log(movie)
          // console.log('https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.backdrop_path)
          let url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.poster_path
          console.log(url)
          return (
            <Movie
              key={movie.id}
              image={url}
              title={movie.title}
              overview={movie.overview}
              released={movie.release_date}
            />
          )
        })}
      </main>
    )
  }
}

export default Movies
