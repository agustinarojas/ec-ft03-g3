import {
	PUT_PRODUCT,
	PUT_CATEGORY,
	POST_CATEGORY,
	DELETE_CATEGORY,
	SET_CATEGORY,
	DELETE_PROD_CATEGORY,
	GET_PRODUCTS,
	FILTER_BY_CATEGORY,
	GET_CATEGORIES,
	GET_CARRITO,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	DELETE_PROD_CART,
	ADD_TO_CART,
	GET_ORDER,
	SEARCH_PRODUCT,
	EMPTY_CART,
	GET_ORDERS,
	GET_USER,
	LOGIN,
	LOGOUT,
	SETCANTIDAD,
} from '../Constants/ProductsConstants';
const inicialState = {
	products: [],
	catProducts: [],
	categories: [],
	productsCar: [],
	orders: [],
	user: {},
};

export default function rootReducer(state = inicialState, action) {
	switch (action.type) {
		//* PRODUCTS
		case GET_PRODUCTS:
			return {
				...state,
				products: action.products,
			};
		case ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, action.product],
			};
		case PUT_PRODUCT:
			let prod = state.products.filter(prod => prod.id !== action.product.id);
			return {
				...state,
				products: [...prod, action.product],
			};
		case DELETE_PRODUCT:
			return {
				...state,
				products: state.products.filter(prod => prod.id !== action.product.id),
			};
		//* CATEGORIES
		case GET_CATEGORIES:
			return {
				...state,
				categories: action.categories,
			};
		case POST_CATEGORY:
			return {
				...state,
				categories: [...state.categories, action.category],
			};
		case PUT_CATEGORY:
			let cat = state.categories.filter(cat => cat.id !== action.category.id);
			return {
				...state,
				categories: [...cat, action.category],
			};
		case DELETE_CATEGORY:
			return {
				...state,
				categories: state.categories.filter(cat => cat.id !== action.category.id),
			};
		//* PRODUCT-CATEGORY
		case SET_CATEGORY:
			return state;
		case DELETE_PROD_CATEGORY:
			return state;
		case FILTER_BY_CATEGORY:
			return {
				...state,
				catProducts: action.catProducts,
			};
		//* CARRITO
		case GET_CARRITO:
			console.log(state.totalCarrito);
			return {
				...state,
				productsCar: action.productsCar,
			};
		case ADD_TO_CART:
			let prods = state?.productsCar?.filter((p, i) => p.id !== action.product.id);
			if (prods.length !== state.productsCar) {
				for (let i = 0; i < state.productsCar.length; i++) {
					if (state.productsCar[i].id === action.product.id) state.productsCar[i] = action.product;
					return state;
				}
			}
			return {
				...state,
				productsCar: [...state.productsCar, action.product],
			};
		case EMPTY_CART:
			return {
				...state,
				productsCar: action.cart,
			};
		case DELETE_PROD_CART:
			if (state.productsCar.length === 1) {
				return {
					...state,
					productsCar: [],
				};
			}

			let productos = state.productsCar.filter(prod => {
				return prod.id !== action.productCar.id;
			});
			// let precios = productos.map(
			// 	prod => parseInt(prod.lineorder.cantidad) * parseInt(prod.precio),
			// );
			return {
				...state,
				productsCar: productos,
				// totalCarrito: precios.reduce((acum, value) => acum + value),
			};

		case SETCANTIDAD:
			for (let i = 0; i < state.productsCar.length; i++) {
				if (state.productsCar[i].id === action.product.id) state.productsCar[i] = action.product;
			}
			return state;
		//* ORDERS
		case GET_ORDER:
			return {
				...state,
				orders: action.orders,
			};
		case SEARCH_PRODUCT:
			return {
				...state,
				products: action.product,
			};
		case GET_ORDERS:
			return {
				...state,
				orders: action.orders,
			};

		//* USER

		case GET_USER:
			return {
				...state,
				user: action.user,
			};
		case LOGIN:
			return {
				...state,
				user: action.user,
			};
		case LOGOUT:
			return {
				...state,
				user: {},
			};
		default:
			return state;
	}
}
