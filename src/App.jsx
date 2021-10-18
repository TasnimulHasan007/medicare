import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import "./App.css"
import Footer from "./components/Footer/Footer"
import ServiceDetails from "./components/ServiceDetails/ServiceDetails"
import { createContext, useEffect, useState } from "react"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import AuthProvider from "./contexts/AuthProvider"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import NotFound from "./Pages/NotFound/NotFound"
import Blog from "./Pages/Blog/Blog"
import About from "./Pages/About/About"

export const ServicesContext = createContext([])

function App() {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <AuthProvider>
      <ServicesContext.Provider value={services}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/services/:serviceId">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ServicesContext.Provider>
    </AuthProvider>
  )
}

export default App
