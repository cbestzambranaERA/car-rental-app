import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faUser, faUserPlus, faCar, faGlobe, faClock, faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from "react-router-dom"
import "../../styles/header.css"

import { useRef } from "react"

const navLinks = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/about",
    display: "About"
  },
  {
    path: "/cars",
    display: "Cars"
  },
  {
    path: "/blogs",
    display: "Blog"
  },
  {
    path: "/contact",
    display: "Contact"
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu-active");
  
  return (
    <header className="header">
      {/**===== Top Header ===== */}
      <div className="header-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-left">
                <span>Call Us for Assistance!</span>
                <span className="header-top-help">
                  <FontAwesomeIcon className="faPhone" icon={faPhone} /> +1-860-555-1234
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header-top-right d-flex align-items-center justify-content-end gap-3">
                <Link to='#' className="d-flex align-items-center gap-1">
                  <FontAwesomeIcon className="faUser" icon={faUser} /> Login
                </Link>


                <Link to='#' className="d-flex align-items-center gap-1">
                  <FontAwesomeIcon className="faUserPlus" icon={faUserPlus} /> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/**===== Main Header ===== */}
      <div className="main-header">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className="d-flex align-items-center gap-2">
                    <FontAwesomeIcon className="faCar" icon={faCar} />
                    <span>Car Rental US</span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg='3' md='3' sm='4'>
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <FontAwesomeIcon className="faGlobe" icon={faGlobe} />
                </span>
                <div className="header-location-content">
                  <h4>123 Ford St</h4>
                  <h6>West Hartford, CT</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <FontAwesomeIcon className="faClock" icon={faClock} />
                </span>
                <div className="header-location-content">
                  <h4>Monday to Friday</h4>
                  <h6>9am - 6pm</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="d-flex align-item-center justify-content-end">
              <button className="header-btn btn">
                <Link to="/contact">
                  <FontAwesomeIcon className="faPhone" icon={faPhone} /> Give us a Call!
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="main-navbar">
        <Container>
          <div className="nav-wrapper d-flex align-items-center justify-content-between">
            <span className="mobile-menu">
              <FontAwesomeIcon className="faBars" icon={faBars} />
            </span>

            <div className="nav" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) =>(
                  <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav-active nav-item" : "nav-item"
                  }
                  key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav-right">
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <span>
                  <FontAwesomeIcon className="faMagnifyingGlass" icon={faMagnifyingGlass} />
                </span>
              </div>

            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header

