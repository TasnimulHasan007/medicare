import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import aboutImg1 from "../../images/about-img1.png"
import doctor1 from "../../images/doctor1.jpg"
import doctor2 from "../../images/doctor2.jpg"
import doctor3 from "../../images/doctor3.jpg"
import doctor4 from "../../images/doctor4.jpg"
import user1 from "../../images/user1.jpg"
import user2 from "../../images/user2.jpg"
import "./About.css"

const About = () => {
  return (
    <div className="about">
      {/* banner */}
      <div className="about-banner">
        <Container>
          <h2>About</h2>
        </Container>
      </div>
      <Container>
        {/* about us */}
        <Row className="about-us gx-5">
          <Col md={6}>
            <img src={aboutImg1} alt="" />
          </Col>
          <Col md={6}>
            <h5>About Us</h5>
            <h1>What do we do</h1>
            <p>
              A Centre of Excellence for Women's, Men’s and Pelvic Health
              Maximize your lifestyle by optimizing your physical health – be
              your best you!
            </p>
            <Row className="services g-4">
              <Col sm={6}>
                <span>
                  <i className="fas fa-headset"></i> Expert Customer
                </span>
              </Col>
              <Col sm={6}>
                <span>
                  <i className="fas fa-truck"></i> Free Shipping
                </span>
              </Col>
              <Col sm={6}>
                <span>
                  <i className="fas fa-thumbs-up"></i> Amazing Deals
                </span>
              </Col>
              <Col sm={6}>
                <span>
                  <i className="fas fa-coins"></i> Free Return
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* our doctors */}
      <div className="our-doctors">
        <Container>
          <h5>Meet Our Team</h5>
          <h1>Our Doctors</h1>
          <Row>
            <Col lg={3} md={6}>
              <div className="doctor">
                <img src={doctor1} alt="" />
                <h4>Sharon A. Robinson</h4>
                <p>DOCTOR</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="doctor">
                <img src={doctor2} alt="" />
                <h4>Luna Zoey</h4>
                <p>DOCTOR</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="doctor">
                <img src={doctor3} alt="" />
                <h4>David Joseph</h4>
                <p>DOCTOR</p>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="doctor">
                <img src={doctor4} alt="" />
                <h4>Ethan Jacob</h4>
                <p>DOCTOR</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* testimonials */}
      <div className="testimonials">
        <Container>
          <h1>Testimonials</h1>
          <p>Why People Believe in Us!</p>
          <hr />
          <div className="testimonial-container">
            <Row>
              <Col md={6} className="testimonial">
                <i className="fas fa-quote-left"></i>
                <p>
                  Medicare Company is a great place to work! The family owned
                  and operated business cares about their employees, continues
                  to grow, provides challenging work and growth opportunities.
                  Management is friendly and the entire company is team and goal
                  oriented.
                </p>
                <div className="user">
                  <img src={user1} alt="" />
                  <div>
                    <h5>Nelson Lent</h5>
                    <p>HD Manager</p>
                  </div>
                </div>
              </Col>
              <Col md={6} className="testimonial">
                <i className="fas fa-quote-left"></i>
                <p>
                  Great company, happy culture, lots of fun events like chili
                  cook off contests, recognition programs, we get to help
                  patients and the atmosphere is structured but relaxed.
                  Friendly co-workers, collaborative environment. Love it here!!
                </p>
                <div className="user">
                  <img src={user2} alt="" />
                  <div>
                    <h5>Aiden Matthew</h5>
                    <p>HD Manager</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default About
