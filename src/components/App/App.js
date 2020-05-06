import React, { useContext } from "react"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"
import DotLoader from "react-spinners/DotLoader"

import styles from "./App.module.css"
import EbuyContext from "../../context/ebuyContext"
import NoResults from "../NoResults/NoResults"

function App() {
  const { results, isLoading, error } = useContext(EbuyContext)

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        {!isLoading && results && <Products results={results} />}
        {error.showError && <NoResults error={error.text} />}
        <DotLoader
          loading={isLoading}
          css={{ margin: "100px auto auto auto" }}
          color={"#111"}
        />
      </div>
    </div>
  )
}

export default App
