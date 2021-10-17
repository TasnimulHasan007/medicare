import React from "react"
import { Container } from "react-bootstrap"
import "./Banner.css"

const Banner = () => {
  return (
    <div className="banner">
      <Container className="banner-inner">
        <div className="title">
          <span>Full Spectre</span> <br /> Treatment
        </div>
        <ul>
          <li>
            <i className="fas fa-check"></i>Medical Counseling
          </li>
          <li>
            <i className="fas fa-check"></i>Cardiac Clinyc
          </li>
          <li>
            <i className="fas fa-check"></i>Pediatric Clinic
          </li>
          <li>
            <i className="fas fa-check"></i>Gynecological Clinic
          </li>
          <li>
            <i className="fas fa-check"></i>Laboratory Analysis
          </li>
          <li>
            <i className="fas fa-check"></i>Diagnosis Clinic
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Banner
