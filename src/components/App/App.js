import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "../Header/Header"
import Home from "../Home/Home"
import CartPage from "../CartPage/CartPage"
import NotFound from "../NotFound/NotFound"

import EbuyState from "../../context/EbuyState"

function App() {
  return (
    <EbuyState>
      <Router basename="/ebuy">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={CartPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </EbuyState>
  )
}

export default App
