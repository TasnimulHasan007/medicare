import React, { useState } from "react"
import { Container } from "react-bootstrap"
import { Link, useHistory, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Login = () => {
  // location
  const location = useLocation()
  const redirect_url = location.state?.from || "/home"
  // history
  const history = useHistory()
  // states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // authentication methods
  const { googleSignIn, auth, signInWithEmailAndPassword, setIsLoading } =
    useAuth()
  // handle email change
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  // handle password change
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  // handle login
  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setError("")
        history.push(redirect_url)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false))
  }
  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => history.push(redirect_url))
      .catch((error) => {
        setError(error.message)
      })
      .finally(setIsLoading(false))
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
        <form onSubmit={handleLogin}>
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
          <input type="submit" value="Login" className="btn" />
        </form>
        <Link to="/register">New to MediCare?</Link>
        <hr />
        <button onClick={handleGoogleSignIn} className="btn">
          <i className="fab fa-google me-1"></i> Continue With Google
        </button>
      </div>
    </Container>
  )
}

export default Login
