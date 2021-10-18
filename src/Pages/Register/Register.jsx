import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Register = () => {
  // history
  const history = useHistory()
  // states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // authentication methods
  const { googleSignIn, createUserWithEmailAndPassword, auth } = useAuth()
  // handle email change
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  // handle password change
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  // handle registration
  const handleRegistration = (e) => {
    e.preventDefault()
    // email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid Email")
      return
    }
    // password validation
    if (password.length < 8) {
      setError("Password must be at leat 8 characters long")
      return
    }
    if (!/(?=(.*[A-Z]))/.test(password)) {
      setError("Password must contain at least 1 uppercase letter")
      return
    }
    if (!/(?=(.*[0-9]){2,})/.test(password)) {
      setError("Password must contain at least 2 numbers")
      return
    }
    // create user

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setError("")
        history.push("/home")
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  return (
    <Container>
      <div className="form-container">
        <div className="logo">
          <span>
            <i className="fas fa-heartbeat"></i> Medi
          </span>
          Care
        </div>
        <form onSubmit={handleRegistration}>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" required />
          <label htmlFor="email">Your Email</label>
          <input onBlur={handleEmail} type="email" id="email" required />
          <label htmlFor="password">Password</label>
          <input
            onBlur={handlePassword}
            type="password"
            id="password"
            required
          />
          {error && <p style={{ color: "#F73131" }}>{error}</p>}
          <input type="submit" value="Register" className="btn" />
        </form>
        <Link to="/login">Already registered?</Link>
        <hr />
        <button onClick={googleSignIn} className="btn">
          <i className="fab fa-google me-1"></i> Continue With Google
        </button>
      </div>
    </Container>
  )
}

export default Register
