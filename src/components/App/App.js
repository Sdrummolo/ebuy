import React, { useContext } from "react"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"

import styles from "./App.module.css"
import EbuyContext from "../../context/ebuyContext"

function App() {
  const { results } = useContext(EbuyContext)

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        {results ? <Products results={results} /> : null}
      </div>
    </div>
  )
}

export default App
