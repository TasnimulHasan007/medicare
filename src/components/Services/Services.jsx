import React, { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { ServicesContext } from "../../App"
import Service from "../Service/Service"
import "./Services.css"

const Services = () => {
  const services = useContext(ServicesContext)

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
