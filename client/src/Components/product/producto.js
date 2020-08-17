import React from 'react';

export default function Products(producto) {
	return (
		<div>
			<div>
				<img src={producto?.producto[0]?.imagen} />
			</div>
			<h1>{producto?.producto[0]?.titulo}</h1>
			<h3>{producto?.producto[0]?.precio}</h3>
			<div>
				<p>{producto?.producto[0]?.descripcion}</p>
			</div>
			<h6>reviews</h6>
			<div>
				<div>
					<p>{producto?.producto[0]?.cantidad}</p>
				</div>
				<button>Add to cart</button>
			</div>
		</div>
	);
}
