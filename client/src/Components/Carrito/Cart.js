import React from 'react';
import Item from './Item';
import './cart.css'

export default function Cart({products}) {
	return (
		<div className='flexend'>
			<button id = 'compra'>Checkout</button>
			<Item products={products} />
		</div>
	);
}
