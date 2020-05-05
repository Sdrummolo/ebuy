export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      }
    case "LOAD_PRODUCTS":
      return {
        ...state,
        results: action.payload,
        isLoading: false,
      }
    default:
      return state
  }
}
