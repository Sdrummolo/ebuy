import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import CartPage from "../CartPage/CartPage"
import NotFound from "../NotFound/NotFound"

import EbuyState from "../../context/EbuyState"

function App() {
  return (
    <EbuyState>
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
    </EbuyState>
  )
}

export default App
