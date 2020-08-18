import axios from 'axios';
import {GET_PRODUCTS, POST_PRODUCTS, PUT_PRODUCTS} from '../Constants/ProductsConstants.js';

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

export function postProducts(product) {
	return function (dispatch) {
		return axios
			.post('http://localhost:3005/products', product)
			.then(res => {
				dispatch({type: POST_PRODUCTS, product});
			})
			.catch(err => console.log(err));
	};
}
export function putProducts(product, id) {
	return function (dispatch) {
		return axios
			.put(`http://localhost:3005/products/${id}`, product)
			.then(res => {
				dispatch({type: PUT_PRODUCTS, product});
			})
			.catch(err => console.log(err));
	};
}
