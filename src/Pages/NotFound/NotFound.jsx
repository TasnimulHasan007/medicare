import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <Container>
        <h1>404</h1>
        <p>Oops! Something went wrong</p>
        <Link to="/home">
          <button>
            <i className="fas fa-arrow-left"></i> Go Back Home
          </button>
        </Link>
      </Container>
    </div>
  )
}

export default NotFound
