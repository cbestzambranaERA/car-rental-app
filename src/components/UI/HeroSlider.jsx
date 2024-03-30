import Slider from "react-slick"
import { Container } from "reactstrap"
import { Link } from "react-router-dom"
import "../../styles/hero-slider.css"

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  }

  return (
    <Slider {...settings} className="hero-slider">
      <div>
        Slider
      </div>
    </Slider>
  )
}

export default HeroSlider