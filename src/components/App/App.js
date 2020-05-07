import React, { useContext } from "react"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"
import DotLoader from "react-spinners/DotLoader"
import LoadMore from "../LoadMore/LoadMore"
import NoResults from "../NoResults/NoResults"

import EbuyContext from "../../context/ebuyContext"

function App() {
  const { results, isLoading, error, showedProducts } = useContext(EbuyContext)

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container">
        {isLoading && showedProducts === 10 ? (
          <DotLoader loading={isLoading} css={{ margin: "200px auto auto auto" }} color={"#111"} />
        ) : null}
        {isLoading && showedProducts > 10 ? (
          <>
            <Products results={results} />
            <DotLoader loading={isLoading} css={{ margin: "50px auto 50px auto" }} color={"#111"} />
          </>
        ) : null}
        {!isLoading && results.length && (
          <>
            <Products results={results} />
            <LoadMore />
          </>
        )}

        {error.showError && <NoResults error={error.text} />}
      </div>
    </div>
  )
}

export default App
