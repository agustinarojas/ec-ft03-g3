import {
	GET_PRODUCTS,
	DELETE_PRODUCT,
	DELETE_CATEGORY,
	SET_CATEGORY,
	DELETE_PROD_CATEGORY,
	POST_CATEGORY,
	PUT_CATEGORY,
	POST_PRODUCTS,
	PUT_PRODUCTS,
} from '../Constants/ProductsConstants';

const inicialState = {
	products: [],
	product: {},
	putProduct: {},
	category: {},
	putCat: {},
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
		case PUT_CATEGORY:
			return {
				...state,
				putCat: action.putCat,
			};
		default:
			return state;
			return state;
	}
}
