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
    default:
      return state
  }
}
