import React, { useContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import CartPage from "../CartPage/CartPage"
import NotFound from "../NotFound/NotFound"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={CartPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
