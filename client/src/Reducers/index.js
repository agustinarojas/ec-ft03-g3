import {
	PUT_CATEGORY,
	POST_CATEGORY,
	DELETE_CATEGORY,
	SET_CATEGORY,
	DELETE_PROD_CATEGORY,
	GET_PRODUCTS,
	FILTER_BY_CATEGORY,
	GET_CATEGORIES,
	GET_CARRITO
} from '../Constants/ProductsConstants';
const inicialState = {
	products: [],
	catProducts: [],
	categories: [],
	productsCar: []
};

export default function rootReducer(state = inicialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.products,
			};
		case DELETE_CATEGORY:
			return {
				...state,
			};
		case SET_CATEGORY:
			return state;
		case DELETE_PROD_CATEGORY:
			return state;
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
		default:
			return state;
	}
}
