import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
  }

  console.log(moviesList)

  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem details={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
