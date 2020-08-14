import React from 'react';
import './productCard.css';

export default function ProductCard({imagen, titulo, precio, id}) {
	return (
		<div className="card">
			<img src={imagen} alt="" />
			<h1 className="titulo"> {titulo} </h1>
			<p> {precio} </p>
			<button>Add to cart</button>
		</div>
	);
}