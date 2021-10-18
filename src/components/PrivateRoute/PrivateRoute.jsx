import React from "react"
import { Container, Spinner } from "react-bootstrap"
import { Redirect, Route } from "react-router"
import useAuth from "../../hooks/useAuth"

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth()
  if (isLoading) {
    return (
      <Container
        style={{ height: "calc(100vh - 75px)" }}
        className="py-5 w-100 d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" variant="primary" />
      </Container>
    )
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  )
}

export default PrivateRoute
