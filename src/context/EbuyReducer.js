export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
        error: { showError: false, text: "" },
      }
    case "SET_INPUT":
      return {
        ...state,
        input: action.payload,
      }
    case "LOAD_PRODUCTS":
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        error: { showError: false, text: "" },
      }
    case "INCREMENT_SHOWED_RESULTS":
      return {
        state,
        resultsNumber: state.resultsNumber + 10,
      }
    case "ERROR":
      return {
        ...state,
        error: { showError: true, text: state.input },
        isLoading: false,
        results: [],
      }
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: state.cart.concat(
          state.results.filter(product => {
            return product.itemId[0] === action.payload
          })
        ),
        results: state.results.map(product => {
          if (product.itemId[0] === action.payload) {
            product.isInCart = true
            return product
          } else return product
        }),
      }
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter(product => {
          return product.itemId[0] !== action.payload
        }),
        results: state.results.map(product => {
          if (product.itemId[0] === action.payload) {
            product.isInCart = false
            return product
          } else return product
        }),
      }
    default:
      return state
  }
}
