import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function ProductCard({imagen, titulo, precio, review, id}) {
	// const handleOnCLick(userId){
	// 	axios.get('http://localhost:3005/users//')
	// 	axios.post(`http://localhost:3005/users/${userId}/cart`)
	// }
	return (
		<div>
			<figure class="card card-product contein">
				<Link to={`/product/${id}`}>
					<div class="img-wrap">
						<img src={imagen} className="imagen" />
					</div>
				</Link>
				<figcaption class="info-wrap">
					<h4 class="title">{titulo}</h4>
					<div class="rating-wrap">
						<div class="label-rating"> (Review) </div>
					</div>
				</figcaption>
				<div class="bottom-wrap">
					<button class="btn btn-sm btn-primary float-right">Order Now</button>
					<div class="price-wrap h5">
						<span class="price-new">${precio}</span>
					</div>
				</div>
			</figure>
		</div>
	);
}
