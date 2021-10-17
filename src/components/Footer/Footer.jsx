import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <Container className="footer">
        <Row className="py-5">
          <Col lg={3} md={6}>
            <i className="fas fa-home"></i>
            <h4>Address</h4>
            <div className="line"></div>
            <p>
              E104, Hill street 2, Watson road, <br /> Chicago, IL
            </p>
          </Col>
          <Col lg={3} md={6}>
            <i className="fas fa-mobile-alt"></i>
            <h4>EMERGENCY ( 24X7 )</h4>
            <div className="line"></div>
            <p>
              Mobile: +601-258-8524 <br /> Toll Free : 123 456 7890
            </p>
          </Col>
          <Col lg={3} md={6}>
            <i className="fas fa-envelope"></i>
            <h4>EMAIL US</h4>
            <div className="line"></div>
            <p>
              medicare@google.com <br /> medi_care@yahoo.com
            </p>
          </Col>
          <Col lg={3} md={6}>
            <i className="fas fa-clock"></i>
            <h4>WORKING HOURS</h4>
            <div className="line"></div>
            <p>
              Mon to Sat 9 AM to 11 PM, <br /> Sunday 10 AM to 6 PM
            </p>
          </Col>
        </Row>
      </Container>
      <div className="copyright">
        <p>&copy; Copyright 2021, Medicare | All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
