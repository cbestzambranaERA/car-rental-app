import Helmet from "../components/Helmet/Helmet"
import HeroSlider from "../components/UI/HeroSlider"
import AboutSection from "../components/UI/AboutSection"
import { Container, Row, Col } from "reactstrap"
import FindCarForm from "../components/UI/FindCarForm"
import ServicesList from "../components/UI/ServicesList"
import CarItem from "../components/UI/CarItem"
import carData from "../assets/data/carData"


function Home() {
  return (
    <Helmet title="Home">
      {/**===== Hero Section ===== */}
      <section className="p-0 hero-slider-section">
        <HeroSlider />

        <div className="hero-form">
          <Container>
            <Row className="form-row">
              <Col lg="4" md="4">
                <div className="find-cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>

      </section>

      {/** ===== About Section ===== */}
      <AboutSection />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section-subtitle">See Our</h6>
              <h2 className="section-title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/**===== Car Item Offers Section ===== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="text-center mb-5">
              <h6 className="section-subtitle">Come with</h6>
              <h2 className="section-title">Hot Offers Available</h2>
            </Col>

            {carData.slice(0, 6).map((item) =>(
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home