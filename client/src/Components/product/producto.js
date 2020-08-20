import React from 'react';
import './producto.css';
import axios from 'axios';
export default function Products(producto) {
	const handleOnCLick = (id, userId) => {
		axios.post(`http://localhost:3005/users/${userId}/cart`, {id});
	};
	return (
		<div className="wrapper">
			<div>
				<img src={producto?.producto[0]?.imagen} className="Imga" />
			</div>
			<div className="Description">
				<h1>{producto?.producto[0]?.titulo}</h1>
				<div>
					<p>{producto?.producto[0]?.descripcion}</p>
					<div>
						<p>Stock: {producto?.producto[0]?.stock}</p>
					</div>
				</div>
				<h6>(reviews)</h6>
				<div className="Precio">
					<h3>$ {producto?.producto[0]?.precio}</h3>
					<button
						type="button"
						className="btn btn-primary"
						onClick={e => handleOnCLick(e.target.name, 2)}
						name={producto?.producto[0]?.id}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}
