const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {...state, isLoading: true} // isLoading: !state.isLoading desek de olur. aynı şey.
    
    case "SET_ERROR":
        return {...state, isLoading:false, isError: action.payload} // action.payload'ında hata mesajı var.

    case "SET_PRODUCT":
      return {...state, isLoading: false, isError: false, products: action.payload}

    default:
      return state;
  }
};

export default productReducer;
