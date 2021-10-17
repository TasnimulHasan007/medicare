import React from "react"
import { Col } from "react-bootstrap"
import "./Service.css"

const Service = ({
  service: { serviceName, image, serviceType, description },
}) => {
  return (
    <Col lg={4} md={6}>
      <div className="service">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="service-body">
          <h4>{serviceName}</h4>
          <span>{serviceType.join(", ")}</span>
          <p>{description.slice(0, 200)}</p>
          <button>Details</button>
        </div>
      </div>
    </Col>
  )
}

export default Service
