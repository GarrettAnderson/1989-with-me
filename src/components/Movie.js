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
            <h3>Film Title</h3>
            <p>Film Plot Overview</p>
          </figcaption>
        </figure>
      </section>
    )
  }
}

export default Movie
