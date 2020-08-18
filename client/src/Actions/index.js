import axios from 'axios';
import {GET_PRODUCTS, POST_CATEGORY, PUT_CATEGORY } from '../Constants/ProductsConstants';

export function getProducts() {
	return function (dispatch) {
		return axios
			.get('http://localhost:3005/products')
			.then(res => {
				console.log(res.data);
				dispatch({type: GET_PRODUCTS, products: res.data});
			})
			.catch(err => console.log(err));
	};
}
export function postCategory (category) {

return function (dispatch) {

	return axios
	.post ("http://localhost:3005/category", category)
	.then (res => {
			dispatch({type: POST_CATEGORY, category})
		}).catch(err => console.log(err));
	}
}

export function putCategory (category,id) {
	return function (dispatch) {
		return axios
		.put (`http://localhost:3005/category/${id}`, category)
		.then (res => {
			dispatch ({type: PUT_CATEGORY, category})
		}).catch(err => console.log(err));
	}
}