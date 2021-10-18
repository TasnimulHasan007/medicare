import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import "./App.css"
import Footer from "./components/Footer/Footer"
import ServiceDetails from "./components/ServiceDetails/ServiceDetails"
import { createContext, useEffect, useState } from "react"

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
        </Switch>
        <Footer />
      </Router>
    </ServicesContext.Provider>
  )
}

export default App
