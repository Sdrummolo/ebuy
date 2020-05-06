import React, { useReducer } from "react"
import EbuyReducer from "./EbuyReducer"
import EbuyContext from "./ebuyContext"

const VERSION = "1.13.0"
const SECURITY_APPNAME = "LuigiDiP-allbuy-PRD-bc545f399-176ef3d6"

const EbuyState = (props) => {
  const initialState = {
    cart: [],
    results: [],
    input: "",
    isLoading: false,
    error: { showError: false, text: "" },
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

      if (
        response.findItemsByKeywordsResponse[0].searchResult[0]["@count"] ===
        "0"
      ) {
        return dispatch({ type: "ERROR" })
      }
      dispatch({
        type: "LOAD_PRODUCTS",
        payload: response.findItemsByKeywordsResponse[0].searchResult[0].item,
      })
    } catch (err) {
      console.log(err)
      dispatch({ type: "ERROR" })
    }
  }

  // Add product to cart
  const addProductToCart = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product })
  }

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" })

  // Input handler
  const setInput = (input) => dispatch({ type: "SET_INPUT", payload: input })

  return (
    <EbuyContext.Provider
      value={{
        cart: state.cart,
        results: state.results,
        input: state.input,
        isLoading: state.isLoading,
        error: state.error,
        setInput,
        searchProduct,
        addProductToCart,
      }}
    >
      {props.children}
    </EbuyContext.Provider>
  )
}

export default EbuyState
