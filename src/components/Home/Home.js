import React, { useContext } from "react"
import DotLoader from "react-spinners/DotLoader"
import Products from "./Products/Products"
import NoResults from "./NoResults/NoResults"

import EbuyContext from "../../context/ebuyContext"

const Home = () => {
  const { results, isLoading, error, showedProducts } = useContext(EbuyContext)

  return (
    <>
      {!isLoading && showedProducts === 0 ? (
        <h3 style={{ marginTop: 100, textAlign: "center" }}>Powered by Ebay Finding API</h3>
      ) : null}
      {isLoading && showedProducts === 10 ? (
        <DotLoader loading={isLoading} css={{ margin: "200px auto auto auto" }} color={"#111"} />
      ) : null}
      {isLoading && showedProducts > 10 ? (
        <>
          <Products results={results} />
          <DotLoader loading={isLoading} css={{ margin: "auto auto 40px auto" }} color={"#111"} />
        </>
      ) : null}
      {!isLoading && results.length ? (
        <>
          <Products results={results} />
        </>
      ) : null}
      {error.showError && <NoResults error={error.text} />}
    </>
  )
}

export default Home
