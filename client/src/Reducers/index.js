import {
  GET_PRODUCTS,
  POST_CATEGORY,
  PUT_CATEGORY,
  POST_PRODUCTS,
  PUT_PRODUCTS,
} from "../Constants/ProductsConstants";
const inicialState = {
  products: [],
  category: {},
  putCat: {},
  product: {},
  putProduct: {},
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case POST_PRODUCTS:
      return {
        ...state,
        product: action.product,
      };
    case PUT_PRODUCTS:
      return {
        ...state,
        putProduct: action.putProduct,
      };
    case POST_CATEGORY:
      return {
        ...state,
        category: state.category,
      };
    case PUT_CATEGORY:
      return {
        ...state,
        putCat: action.putCat,
      };
  }
  return state;
}
export default rootReducer;
