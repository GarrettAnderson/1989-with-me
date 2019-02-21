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

          console.log('https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.backdrop_path)
          let url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.backdrop_path
          console.log(url)
          return <Movie key={movie.id} image={url} title={movie.original_title} overview={movie.overview} />
        })}
      </main>
    )
  }
}

export default Movies