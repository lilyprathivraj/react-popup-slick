import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const action = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedy = moviesList.filter(each => each.categoryId === 'COMEDY')
    return (
      <div>
        <img
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
        <div>
          <h1>Action Movies</h1>
          <MoviesSlider details={action} />
        </div>
        <div>
          <h1>Comedy Movies</h1>
          <MoviesSlider details={comedy} />
        </div>
      </div>
    )
  }
}
export default PrimeVideo
