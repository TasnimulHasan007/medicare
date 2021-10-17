import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Container className="header">
        <div className="brand">
          <span>
            <i className="fas fa-heartbeat"></i> Medi
          </span>
          Care
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
        </nav>
        <div className="btn-container">
          <button className="btn-main login">Login</button>
          <button className="btn-main register">Register</button>
        </div>
      </Container>
    </header>
  )
}

export default Header
