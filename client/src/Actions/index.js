import axios from 'axios';
import {
	GET_PRODUCTS,
	DELETE_PRODUCT,
	SET_CATEGORY,
	 DELETE_PROD_CATEGORY
} from '../Constants/ProductsConstants';

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

export function deleteProduct(id) {
	return axios.delete('http://localhost:3005/products/' + id)
	
}

export function deleteCategory(id) {
	return axios.delete('http://localhost:3005/category/' + id)
}

export function setCategory(prodId, catId) {
	return function (dispatch) {
		return axios
			.post(`http://localhost:3005/products/${prodId}/category/${catId}`)
			.then(res => {
				console.log(res.data);
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
				console.log(res.data);
				dispatch({type: DELETE_PROD_CATEGORY});
			})
			.catch(err => console.log(err));
	};
}
