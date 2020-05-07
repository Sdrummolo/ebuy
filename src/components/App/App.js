import React, { useContext } from "react"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"
import DotLoader from "react-spinners/DotLoader"
import LoadMore from "../LoadMore/LoadMore"
import NoResults from "../NoResults/NoResults"

import EbuyContext from "../../context/ebuyContext"

function App() {
  const { results, isLoading, error } = useContext(EbuyContext)

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        {results.length ? <Products results={results} /> : null}
        {error.showError && <NoResults error={error.text} />}
        {results.length && !isLoading ? <LoadMore /> : null}
        <DotLoader loading={isLoading} css={{ margin: "50px auto 50px auto" }} color={"#111"} />
      </div>
    </div>
  )
}

export default App
