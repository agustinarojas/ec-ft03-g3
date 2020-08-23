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
	SET_CANTIDAD,
	ADD_TO_CART,
} from '../Constants/ProductsConstants';
const inicialState = {
	products: [],
	catProducts: [],
	categories: [],
	productsCar: [],
	// totalCarrito: 0,
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
			// let precios = action.productsCar.map(prod => prod.precio * prod.cantidad);
			return {
				...state,
				productsCar: action.productsCar,
				// totalCarrito: state.totalCarrito + parseInt(action.productsCar.precio),
			};
		case ADD_TO_CART:
			console.log(action);
			return {
				...state,
				productsCar: [...state.productsCar, action.product],
				// totalCarrito: state.totalCarrito + parseInt(action.product.precio),
			};
		case DELETE_PROD_CART:
			if (state.productsCar.length === 1) {
				return {
					...state,
					productsCar: [],
					totalCarrito: 0,
				};
			}

			let productos = state.productsCar.filter(prod => {
				console.log(action.productCar.id);
				return prod.id !== action.productCar.id;
			});
			console.log(state.productsCar);
			let precios = productos.map(
				prod => parseInt(prod.lineorder.cantidad) * parseInt(prod.precio),
			);
			return {
				...state,
				productsCar: productos,
				totalCarrito: precios.reduce((acum, value) => acum + value),
			};
		case SET_CANTIDAD:
			let operacion =
				action.accion === 'mas'
					? parseInt(state.totalCarrito) + parseInt(action.lineorder.precio)
					: parseInt(state.totalCarrito) - parseInt(action.lineorder.precio);

			return {
				...state,
				totalCarrito: operacion,
			};
		default:
			return state;
	}
}
