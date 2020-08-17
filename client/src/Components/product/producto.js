import React from 'react';
import './producto.css';
export default function Products(producto) {
	return (
		<div className="wrapper">
			<div>
				<img src={producto?.producto[0]?.imagen} />
			</div>
			<h1>{producto?.producto[0]?.titulo}</h1>
			<h3>$ {producto?.producto[0]?.precio}</h3>
			<div>
				<p>Descripción: {producto?.producto[0]?.descripcion}</p>
			</div>
			<h6>reviews</h6>
			<div>
				<div>
					<p>Stock: {producto?.producto[0]?.stock}</p>
				</div>
				<button className="btn-info">Add to cart</button>
			</div>
		</div>
	);
}
