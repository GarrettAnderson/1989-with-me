import React, { Component } from 'react'

class Movie extends Component {
  render() {
    let url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.props.backdrop_path
    console.log(url)
    return (
      <section>
        <figure>
          <img src={this.props.image} />
          <figcaption>
            <h3>{this.props.title}</h3>
            <p>{this.props.overview}</p>
          </figcaption>
        </figure>
      </section>
    )
  }
}

export default Movie
