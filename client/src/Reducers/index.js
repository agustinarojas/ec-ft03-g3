import {
	GET_PRODUCTS,
	DELETE_PRODUCT,
	DELETE_CATEGORY,
	SET_CATEGORY,
	DELETE_PROD_CATEGORY,
} from '../Constants/ProductsConstants';

const inicialState = {
	products: [],
	product: {},
	putProduct: {},
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
		default:
			return state;
	}
}

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
	}
	return state;
}
export default rootReducer;
