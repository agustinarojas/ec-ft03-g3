import React from 'react';
import ProductCard from '../product/productCard';
import './cat.css';

export default function Catalogo({products}) {
	return (
		<div className="contenedor">
			{products.map(p => (
				<ProductCard imagen={p.imagen} titulo={p.titulo} precio={p.precio} key={p.id} />
			))}
		</div>
	);
}
