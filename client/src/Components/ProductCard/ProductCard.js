import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function ProductCard({imagen, titulo, precio, review, id}) {
	const handleOnCLick = (id, userId) => {
		console.log(typeof parseInt (id))
			console.log(userId)
		axios.post(`http://localhost:3005/users/${userId}/cart`, {id: parseInt (id)});
	};
	return (
		<div>
			<figure className="card card-product contein">
				<Link to={`/product/${id}`}>
					<div className="img-wrap">
						<img src={imagen} className="imagen" />
					</div>
				</Link>
				<figcaption className="info-wrap">
					<h4 className="title">{titulo}</h4>
					<div className="rating-wrap">
						<div className="label-rating"> (Review) </div>
					</div>
				</figcaption>
				<div className="bottom-wrap">
					<button
						className="btn btn-sm btn-primary float-right"
						onClick={e => handleOnCLick(e.target.name, 1)}
						name={id}>
						Agregar al Carrito
					</button>
					<div className="price-wrap h5">
						<span className="price-new">${precio}</span>
					</div>
				</div>
			</figure>
		</div>
	);
}
