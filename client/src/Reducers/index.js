import {
  PUT_CATEGORY,
  POST_CATEGORY,
  DELETE_CATEGORY,
  SET_CATEGORY,
  DELETE_PROD_CATEGORY,
  DELETE_PRODUCT,
  POST_PRODUCTS,
  PUT_PRODUCTS,
  GET_PRODUCTS,
  FILTER_BY_CATEGORY,
  GET_CATEGORIES,
  GET_CARRITO,
  GET_ORDER,
} from "../Constants/ProductsConstants";
const inicialState = {
  products: [],
  catProducts: [],
  categories: [],
  productsCar: [],
};

export default function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
      };
    case SET_CATEGORY:
      return state;
    case DELETE_PROD_CATEGORY:
      return state;
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
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        catProducts: action.catProducts,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case GET_CARRITO:
      return {
        ...state,
        productsCar: action.productsCar,
      };
    case GET_ORDER:
      return {
        ...state,
        orders: action.orders,
      };
    default:
      return state;
  }
}
