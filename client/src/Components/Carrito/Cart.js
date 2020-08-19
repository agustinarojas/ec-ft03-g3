import React from 'react';
import Item from './Item';

export default function Cart({products}) {
	return (
		<div>
			<Item products={products} />
			<button>Comprar</button>
		</div>
	);
}
