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

export const ServicesContext = createContext([])

function App() {
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
  }, [])

  return (
    <ServicesContext.Provider value={services}>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services/:serviceId">
              <ServiceDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </ServicesContext.Provider>
  )
}

export default App
