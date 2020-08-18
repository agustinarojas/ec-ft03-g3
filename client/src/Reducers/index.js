import {GET_PRODUCTS, POST_CATEGORY, PUT_CATEGORY} from '../Constants/ProductsConstants';
const inicialState = {
	products: [],
	category: {},
	putCat: {}
};

export default function rootReducer(state = inicialState, action) {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				products: action.products,
			};
			case POST_CATEGORY:
				return {
					...state,
					category: state.category
				}
				case PUT_CATEGORY:
					return {
						...state,
						putCat: action.putCat
					}
		default:
			return state;
	}
	
}
