import React, { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { ServicesContext } from "../../App"
import "./ServiceDetails.css"

const ServiceDetails = () => {
  const { serviceId } = useParams()
  const services = useContext(ServicesContext)
  const service = services.find((service) => service.id === serviceId)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Container>
      <div className="service-details">
        <div className="d-flex justify-content-between">
          <Link to="/home">
            <i className="fas fa-arrow-left me-2"></i> Go Back Home
          </Link>
          <h2>{service?.serviceName}</h2>
        </div>
        <hr />
        <Row className="g-5">
          <Col lg={8} md={6}>
            <img src={service?.image} alt="" />
          </Col>
          <Col lg={4} md={6}>
            <div className="info-container">
              <h3>Special Info</h3>
              <div className="underline"></div>
              <div className="d-flex justify-content-between info">
                <p>Insuarance Coverage</p>
                <span>{service?.insuranceCoverage}</span>
              </div>
              <div className="d-flex justify-content-between info">
                <p>Doctor Name</p>
                <span>{service?.doctorName}</span>
              </div>
              <div className="d-flex justify-content-between info">
                <p>Patient Ages</p>
                <span>{service?.patientAges}</span>
              </div>
              <p>{service?.description}</p>
            </div>
          </Col>
          <Col lg={8} md={6}>
            <div className="info-container">
              <h3>Appointment Request</h3>
              <div className="underline"></div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" required />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" required />
                <label htmlFor="phone">Your Phone</label>
                <input type="tel" id="phone" required />
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required />
                <label htmlFor="date">Appointment Date</label>
                <input type="date" id="date" required />
                <input type="submit" value="Send Message" className="btn" />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default ServiceDetails
