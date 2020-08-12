import React from 'react';
import './ProductCard.css';

export default function ProductCard({imagen, titulo, precio}) {
	return (
		<div>
			<img src={imagen} alt="" />
			<h1> {titulo} </h1>
			<p> {precio} </p>
			<button>Add to cart</button>
		</div>
	);
}
