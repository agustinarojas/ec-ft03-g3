import {GET_PRODUCTS, POST_PRODUCTS, PUT_PRODUCTS} from '../Constants/ProductsConstants.js';

const initialState = {
	products: [],
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
	}
	return state;
}
export default rootReducer;
