import axios from 'axios';
import {
	GET_PRODUCTS,
	PUT_PRODUCT,
	DELETE_PRODUCT,
	SET_CATEGORY,
	DELETE_PROD_CATEGORY,
	POST_CATEGORY,
	PUT_CATEGORY,
	FILTER_BY_CATEGORY,
	GET_CATEGORIES,
	GET_CARRITO,
	DELETE_PROD_CART,
	SET_CANTIDAD,
	ADD_TO_CART,
	GET_ORDER,
	SEARCH_PRODUCT,
	EMPTY_CART,
	GET_ORDERS,
} from '../Constants/ProductsConstants';

//* PRODUCTS

export function emptyCart(id) {
	return function (dispatch) {
		return axios
			.delete(`http://localhost:3005/users/${id}/cart`)
			.then(res => {
				dispatch({type: EMPTY_CART, cart: []});
			})
			.catch(err => console.log(err));
	};
}

export function searchProduct(buscar) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3005/search?valor=${buscar}`)
			.then(res => {
				dispatch({type: SEARCH_PRODUCT, product: res.data});
			})
			.catch(err => console.log(err));
	};
}

export function getProducts() {
	return function (dispatch) {
		return axios
			.get('http://localhost:3005/products')
			.then(res => {
				dispatch({type: GET_PRODUCTS, products: res.data});
			})
			.catch(err => console.log(err));
	};
}
export function addProduct(product) {
	return function (dispatch) {
		return axios
			.post('http://localhost:3005/products', product)
			.then(res => {
				dispatch({type: 'ADD_PRODUCT', product: res.data});
			})
			.catch(err => console.log(err));
	};
}

export function putProduct(product, id) {
	return function (dispatch) {
		return axios
			.put(`http://localhost:3005/products/${id}`, product)
			.then(res => {
				dispatch({type: PUT_PRODUCT, product: res.data});
			})
			.catch(err => console.log(err));
	};
}

export function deleteProduct(id) {
	return function (dispatch) {
		return axios
			.delete(`http://localhost:3005/products/${id}`)
			.then(res => {
				dispatch({type: DELETE_PRODUCT, product: res.data});
			})
			.catch(err => console.log(err));
	};
}

//* CATEGORY
export function getCategories() {
	return function (dispatch) {
		return axios
			.get('http://localhost:3005/category')
			.then(res => {
				dispatch({type: GET_CATEGORIES, categories: res.data});
			})
			.catch(err => console.log(err));
	};
}

export function postCategory(category) {
	return function (dispatch) {
		return axios
			.post('http://localhost:3005/category', category)
			.then(res => {
				dispatch({type: POST_CATEGORY, category});
			})
			.catch(err => console.log(err));
	};
}

export function putCategory(category, id) {
	return function (dispatch) {
		return axios
			.put(`http://localhost:3005/category/${id}`, category)
			.then(res => {
				dispatch({type: PUT_CATEGORY, category: res.data});
			})
			.catch(err => console.log(err));
	};
}

export function deleteCategory(id) {
	return function (dispatch) {
		return axios
			.delete('http://localhost:3005/category/' + id)
			.then(res => {
				dispatch({type: 'DELETE_CATEGORY', category: res.data});
			})
			.catch(err => console.log(err));
	};
}

//* PRODUCT-CATEGORY
export function setCategory(prodId, catId) {
	return function (dispatch) {
		return axios
			.post(`http://localhost:3005/products/${prodId}/category/${catId}`)
			.then(res => {
				dispatch({type: SET_CATEGORY});
			})
			.catch(err => console.log(err));
	};
}
export function deleteProdCategory(prodId, catId) {
	return function (dispatch) {
		return axios
			.delete(`http://localhost:3005/products/${prodId}/category/${catId}`)
			.then(res => {
				dispatch({type: DELETE_PROD_CATEGORY});
			})
			.catch(err => console.log(err));
	};
}

export function filterByCategory(categoria) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3005/products/category/${categoria}`)
			.then(res => {
				dispatch({type: FILTER_BY_CATEGORY, catProducts: res.data});
			})
			.catch(err => console.log(err));
	};
}

//* CARRITO
export function getCarrito(userId) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3005/users/${userId}/cart`)
			.then(res => dispatch({type: GET_CARRITO, productsCar: res.data}))
			.catch(err => console.log(err));
	};
}

export function addToCart(userId, prodId) {
	return function (dispatch) {
		console.log(userId, prodId);
		return axios
			.post(`http://localhost:3005/users/${userId}/cart`, {id: parseInt(prodId)})
			.then(res => {
				res.data.lineorder = {cantidad: 1};
				dispatch({type: ADD_TO_CART, product: res.data});
			});
	};
}

export function deleteProdCart(prodId) {
	return function (dispatch) {
		return axios
			.delete(`http://localhost:3005/users/1/cart/${prodId}`)
			.then(res => {
				dispatch({type: DELETE_PROD_CART, productCar: res.data});
			})
			.catch(err => console.log(err));
	};
}

export function setCantidad(prodId, cantidad, accion) {
	return function (dispatch) {
		return axios
			.put(`http://localhost:3005/users/1/cart`, {id: parseInt(prodId), cantidad: cantidad})
			.then(res => {
				console.log(res.data);
				dispatch({type: SET_CANTIDAD, lineorder: res.data, accion});
			})
			.catch(err => console.log(err));
	};
}

export function getOrder(id) {
	return function (dispatch) {
		return axios
			.get(`http://localhost:3005/orders/${id}`)
			.then(res => {
				dispatch({type: GET_ORDER, orders: res.data});
			})
			.catch(err => console.log(err));
	};
}

export function getOrders() {
	return function (dispatch) {
		return axios
			.get('http://localhost:3005/orders')
			.then(res => {
				dispatch({type: GET_ORDERS, orders: res.data});
			})
			.catch(err => {
				console.log(err);
			});
	};
}
