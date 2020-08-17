import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';

export default function ProductCard({imagen, titulo, precio, id}) {
	return (
		<div className="cardP">
			<Link to={`/product/${id}`}>
				<img className="foto card-img-top" src={imagen} alt="" />
				<h1 className="titulo"> {titulo} </h1>
				<p className="precio"> {precio} </p>
			</Link>
			<button className="boton btn btn-info">Add to cart</button>
		</div>
	);
}
