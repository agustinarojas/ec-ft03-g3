import React from 'react';
import './ProductCard.css';
import {Link} from 'react-router-dom';
import {addToCart} from '../../Actions/index';
import {connect} from 'react-redux';

function ProductCard({imagen, titulo, precio, review, id, stock, addToCart}) {
	// const handleOnCLick = (id, userId) => {
	// 	axios.post(`http://localhost:3005/users/${userId}/cart`, {id: parseInt(id)});
	// };

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
						onClick={e => addToCart(1, e.target.name)}
						name={id}
						disabled={stock === 0 ? true : false}>
						{stock === 0 ? 'Sin Stock' : 'Comprar'}
					</button>
					<div className="price-wrap h5">
						<span className="price-new">${precio}</span>
					</div>
				</div>
			</figure>
		</div>
	);
}

export default connect(null, {addToCart})(ProductCard);
