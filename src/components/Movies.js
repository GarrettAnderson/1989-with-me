import React, { Component } from 'react'
// import data from '../data/movies.json'
import Movie from './Movie'

class Movies extends Component {
  state = {
    movies: [],
    releaseYear : '1989'
  }

  componentDidMount() {
    this.getMovieData()
  }

  getMovieData() {
    fetch('https://api.themoviedb.org/3/discover/movie?primary_release_year=' + this.state.releaseYear + '&sort_by=popularity.desc&api_key=213f93dbcbef55b3f468796f573d53a7')
    .then(resp => resp.json())
    .then(data => {
      console.log(data.results)
      this.setState({
        movies: data.results
      })
    })
  }

  searchMovies = (event) => {
    console.log(event.target.value)
    let filtereddata = this.state.movies.filter(movie => {
      // if the input field includes the same characters as the movie's name, return those movies
      if (event.target.value === '') {
        console.log('matching characters')
         return movie 
      } else {
        return movie.title.toLowerCase().includes(event.target.value)
      }  
    })
    this.setState({
      movies: filtereddata
    })
    // console.log(filtereddata)
  }



  render() {
    console.log(this.state)

    return (
      <main className="main-container">

        <input className="search-movie" type="search" onChange={this.searchMovies}></input>
        {this.state.movies.map((movie) => {
          // let movieList = movie.results
          // console.log(movie)
          // console.log('https://image.tmdb.org/t/p/w185_and_h278_bestv2' + movie.backdrop_path)
          let imgUrl = 'https://image.tmdb.org/t/p/w185' + movie.poster_path
          // console.log(imgUrl)
          return (
            <Movie
              key={movie.id}
              image={imgUrl}
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
