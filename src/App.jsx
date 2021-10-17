import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./Pages/Home/Home"
import "./App.css"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
