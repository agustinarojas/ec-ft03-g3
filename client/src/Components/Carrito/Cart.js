import React from 'react';
import Item from './Item';
import axios from 'axios';
import './cart.css';

// export default function Cart({products}) {
// 	function comprar (){
// 		return axios
// 		.put ("http://localhost:3005/orders/1", {estado: "completa"})
// 		.then(res => console.log(res))
// 		.catch(err => console.log(err))
// 	}
// 	return (
// 		<div>
// 			<Item products={products} />
// 			<button  onClick = {comprar}>Comprar</button>

export default function Cart({match}) {
	return (
		<div className="flexend">
			<button id="compra">Checkout</button>
			<Item match={match} />
		</div>
	);
}
