import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Services.css"

const Services = () => {
  // state
  const [services, setServices] = useState([])
  // loading data
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <Container className="services">
      <h3>
        Our <span>Services</span>
      </h3>
      <Row>
        <Col lg={4} md={6}>
          {services.length}
        </Col>
      </Row>
    </Container>
  )
}

export default Services
