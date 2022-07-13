import React, { Component } from 'react'
import Moment from 'moment'

class Movie extends Component {
  render() {
    // let url = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + this.props.backdrop_path
    // console.log(url)

    let formatedDate = Moment(this.props.released).format("MMM Do YY")
    console.log(formatedDate)

    return (
      <section>
        <figure>
          <img src={this.props.image} />
          <figcaption>
            <h2>{this.props.title}</h2>
            <p>{this.props.overview}</p>
            <p>{formatedDate}</p>
          </figcaption>
        </figure>
      </section>
    )
  }
}

export default Movie
