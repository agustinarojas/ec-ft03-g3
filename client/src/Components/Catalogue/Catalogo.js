import React, {useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './cat.css';
import {getReviews, getTotalReviews} from '../../Actions/index';
import {connect} from 'react-redux';

function Catalogo({products, totalreviews, getTotalReviews}) {
	const filtrar = id => {
		return totalreviews?.filter(rev => rev.productId == id);
	};

	useEffect(() => {
		getTotalReviews();
	}, [products]);

	return (
		<div className="contcatal">
			{products.length === 0 ? (
				<p>Producto no encontrado</p>
			) : (
				products?.map(p => {
					console.log(filtrar(p.id));
					return (
						<ProductCard
							imagen={p.imagen}
							titulo={p.titulo}
							precio={p.precio}
							stock={p.stock}
							key={p.id}
							id={p.id}
							reviews={filtrar(p.id)}
						/>
					);
				})
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		reviews: state.reviews,
		totalreviews: state.totalreviews,
	};
}
export default connect(mapStateToProps, {getTotalReviews})(Catalogo);
