import { Col } from "reactstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faGears, faGasPump } from "@fortawesome/free-solid-svg-icons"

import "../../styles/car-item.css"

const CarItem = (props) => {
  const { imgUrl, brand, model, carName, Transmission, mpg, price } = props.item;

  return (
    <Col lg='4' md='4' sm='6' className="mb-5">
      <div className="car-item">
        <div className="car-img">
          <img src={imgUrl} alt={brand} className="w-100" />
        </div>

        <div className="car-item-content mt-4">
          <h4 className="section-title text-center">{carName}</h4>
          <h6 className="rent-price text-center mt-1">
            ${price}.00 <span>per Day</span>
          </h6>

          <div className="car-item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className="d-flex align-items-center gap-1">
              <FontAwesomeIcon className="faCar" icon={faCar} />{model}
            </span>

            <span className="d-flex align-items-center gap-1">
              <FontAwesomeIcon className="faGears" icon={faGears} />{Transmission}
            </span>

            <span className="d-flex align-items-center gap-1">
              <FontAwesomeIcon className="faGasPump" icon={faGasPump} />{mpg}
            </span>
          </div>

            <button className="w-50 car-item-btn car-btn-rent">
              <Link to={`/cars/${carName}`}>Rent</Link>
            </button>

            <button className="w-50 car-item-btn car-btn-details">
              <Link to={`/cars/${carName}`}>Details</Link>
            </button>
            <i class="bi bi-book"></i>
        </div>
      </div>
    </Col>
  )
}

export default CarItem