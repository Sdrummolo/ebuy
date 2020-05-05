import React, { useReducer } from "react"
import EbuyReducer from "./EbuyReducer"
import EbuyContext from "./ebuyContext"

const VERSION = "1.13.0"
const SECURITY_APPNAME = "LuigiDiP-allbuy-PRD-bc545f399-176ef3d6"
// ROBA DA METTERE IN STATE:
// CURRENT ITEMS ADDED TO CART
// LAST SEARCH RESULTS
const EbuyState = (props) => {
  const initialState = {
    cart: [],
    results: [],
    isLoading: false,
  }

  const [state, dispatch] = useReducer(EbuyReducer, initialState)

  // Search product
  const searchProduct = async (product) => {
    setLoading()

    // format input correctly
    const formattedInput = product
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .join("%20")

    try {
      const request = await fetch(
        `https://cors-anywhere.herokuapp.com/https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=${VERSION}&SECURITY-APPNAME=${SECURITY_APPNAME}&RESPONSE-DATA-FORMAT=json&REST-PAYLOAD&keywords=${formattedInput}&paginationInput.entriesPerPage=8`
      )
      const response = await request.json()

      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response.findItemsByKeywordsResponse[0].searchResult[0].item,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" })

  return (
    <EbuyContext.Provider
      value={{
        cart: state.cart,
        results: state.results,
        isLoading: state.isLoading,
        searchProduct,
      }}
    >
      {props.children}
    </EbuyContext.Provider>
  )
}

export default EbuyState
