import React from 'react';
import Item from './Item';
import axios from 'axios';
import './cart.css';
export default function Cart({match}) {
	function comprar() {
		return axios
			.put('http://localhost:3005/orders/1', {estado: 'completa'})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}
	return (
		<div className="flexend">
			<Item match={match} />
			<button id="compra" onClick={comprar}>
				Checkout
			</button>
		</div>
	);
}