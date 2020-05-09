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
            return product.id === action.payload
          })
        ),
        results: state.results.map(product => {
          if (product.id === action.payload) {
            product.quantity = 1
            return product
          } else return product
        }),
      }
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter(product => {
          return product.id !== action.payload
        }),
        results: state.results.map(product => {
          if (product.id === action.payload) {
            product.quantity = 0
            return product
          } else return product
        }),
      }
    case "CHANGE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(product => {
          if (product.id === action.payload.product) {
            product.quantity = action.payload.quantity
            return product
          } else return product
        }),
      }
    default:
      return state
  }
}
