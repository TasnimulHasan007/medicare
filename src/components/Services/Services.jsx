import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import Service from "../Service/Service"
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
      <Row className="g-4">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </Row>
    </Container>
  )
}

export default Services
