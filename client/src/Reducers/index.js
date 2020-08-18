import {GET_PRODUCTS} from '../Constants/ProductsConstants';
const inicialState = {
	products: [],
};

export default function rootReducer(state = inicialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			console.log(action);
			return {
				...state,
				products: action.products,
			};
		default:
			return state;
	}
}
