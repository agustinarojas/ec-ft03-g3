import axios from 'axios';
import {
	GET_PRODUCTS,
	DELETE_PRODUCT
} from '../Constants/ProductsConstants';

export function getProducts() {
	return function (dispatch) {
		return axios
			.get('http://localhost:3005/products')
			.then(res => {
				dispatch({ type: GET_PRODUCTS, products: res.data });
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
