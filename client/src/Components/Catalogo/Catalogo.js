import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
// import 'Catalogo.css';

export default function Catalogo({products}) {
	return (
		<div>
			{products.map(p => (
				<ProductCard imagen={p.imagen} titulo={p.titulo} precio={p.precio} key={p.id} />
			))}
		</div>
	);
}
