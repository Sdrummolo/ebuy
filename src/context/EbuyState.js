import React, { useReducer, useState } from "react"
import EbuyReducer from "./EbuyReducer"
import EbuyContext from "./ebuyContext"

const VERSION = "1.13.0"
const SECURITY_APPNAME = "LuigiDiP-allbuy-PRD-bc545f399-176ef3d6"

const EbuyState = props => {
  const [lastRequest, setLastRequest] = useState("")
  const [showedProducts, setShowedProducts] = useState(10)

  const initialState = {
    cart: [],
    results: [],
    input: "",
    isLoading: false,
    error: { showError: false, text: "" },
  }

  const [state, dispatch] = useReducer(EbuyReducer, initialState)

  const totPrice = state.cart.reduce((a, b) => {
    return a + b.quantity * Number(b.sellingStatus[0].currentPrice[0]["__value__"])
  }, 0)

  const totItems = state.cart.reduce((a, b) => {
    return a + b.quantity
  }, 0)

  // Load products
  const searchProduct = async product => {
    const BASEURL = `https://cors-anywhere.herokuapp.com/https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=${VERSION}&SECURITY-APPNAME=${SECURITY_APPNAME}&RESPONSE-DATA-FORMAT=json&REST-PAYLOAD&keywords=`
    setLoading()

    if (product === undefined) {
      const amountToLoad = showedProducts + 10
      setShowedProducts(showedProducts + 10)

      try {
        const request = await fetch(lastRequest + String(amountToLoad))
        const response = await request.json()

        if (response.findItemsByKeywordsResponse[0].searchResult[0]["@count"] === "0") {
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
    } else {
      // format input correctly
      const formattedInput = product.replace(/\s+/g, " ").trim().split(" ").join("%20")
      setShowedProducts(10)

      try {
        const request = await fetch(`${BASEURL}${formattedInput}&paginationInput.entriesPerPage=10`)
        const response = await request.json()

        if (response.findItemsByKeywordsResponse[0].searchResult[0]["@count"] === "0") {
          return dispatch({ type: "ERROR" })
        }

        setLastRequest(request.url.slice(0, request.url.length - 2))
        dispatch({
          type: "LOAD_PRODUCTS",
          payload: response.findItemsByKeywordsResponse[0].searchResult[0].item,
        })
      } catch (err) {
        console.log(err)
        dispatch({ type: "ERROR" })
      }
    }
  }

  // Add product to cart
  const addProductToCart = product => {
    dispatch({ type: "ADD_PRODUCT", payload: product })
  }

  // Remove product from cart
  const removeProductFromCart = product => {
    dispatch({ type: "REMOVE_PRODUCT", payload: product })
  }

  // change quantity of a product in cart
  const changeQuantity = (product, quantity) => {
    dispatch({ type: "CHANGE_QUANTITY", payload: { product, quantity } })
  }

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" })

  // Search bar nput handler
  const setInput = input => dispatch({ type: "SET_INPUT", payload: input })

  return (
    <EbuyContext.Provider
      value={{
        cart: state.cart,
        results: state.results,
        input: state.input,
        isLoading: state.isLoading,
        error: state.error,
        totPrice,
        totItems,
        showedProducts,
        setInput,
        searchProduct,
        addProductToCart,
        removeProductFromCart,
        changeQuantity,
      }}
    >
      {props.children}
    </EbuyContext.Provider>
  )
}

export default EbuyState
