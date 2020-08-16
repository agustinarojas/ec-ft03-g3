import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

export default function ProductCard({imagen, titulo, precio, id}) {
	return (
		<div className="card">
			<Link to={`/product/${id}`}>
				<img className="img" src={imagen} alt="" />
				<h1 className="titulo"> {titulo} </h1>
				<p> {precio} </p>
			</Link>
			<button className="boton">Add to cart</button>
		</div>
	);
}
