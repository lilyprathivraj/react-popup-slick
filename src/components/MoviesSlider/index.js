import {Component} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    console.log('renderCalled')
    const {details} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings}>
        {details.map(each => (
          <MovieItem movie={each} key={each.id} />
        ))}
      </Slider>
    )
  }
}
export default MoviesSlider
