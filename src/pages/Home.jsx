import Helmet from "../components/Helmet/Helmet"
import HeroSlider from "../components/UI/HeroSlider"

function Home() {
  return (
    <Helmet title="Home">
      {/**===== Hero Section ===== */}
      <section className="hero-slider-section p-0">
        <HeroSlider />
      </section>
    </Helmet>
  )
}

export default Home