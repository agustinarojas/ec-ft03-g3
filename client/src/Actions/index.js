/* export function addMovieFavorite(payload) {
    return {
        type: 'ADD_MOVIE_FAVORITE', payload
    };
} */
import axios from 'axios';
import {GET_PRODUCTS} from '../Constants/ProductsConstants';

export function getProducts() {
	return function (dispatch) {
		return axios
			.get('http://localhost:3005/products')
			.then(res => {
				console.log(res.data + 'RES');
				dispatch({type: GET_PRODUCTS, products: res.data});
			})
			.catch(err => console.log(err));
	};
}