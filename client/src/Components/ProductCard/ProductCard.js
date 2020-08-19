import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductCard({ imagen, titulo, precio, review, id }) {
	return (
		<div>
			<figure class="card card-product contein">
			<Link to={`/product/${id}`}>
				<div class="img-wrap"><img src={imagen} className='imagen' /></div>
				</Link>
				<figcaption class="info-wrap">
					<h4 class="title">{titulo}</h4>
					<div class="rating-wrap">
						<div class="label-rating"> (Review) </div>
					</div>
				</figcaption>
				<div class="bottom-wrap">
					<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>
					<div class="price-wrap h5">
						<span class="price-new">${precio}</span>
					</div>
				</div>
			</figure>
		</div>
	);
}
