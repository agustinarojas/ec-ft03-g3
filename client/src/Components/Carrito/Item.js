import React from 'react';
import './Item.css';

export default function Item({products}) {
	return (
		<div>
			{products?.map(p => (
				<ul className="list-group list-group-flush">
					<li class="list-group-item disp">
						<div>
							<img src={p.imagen} />
							<p>{p.titulo}</p>
							<p>{p.descripcion}</p>
						</div>
						<button className="btn botoncart">-</button>
						<p>{p.cantidad}</p>
						<button className="btn botoncart">+</button>
						<p>$ {p.precio} </p>
						<button>X</button>
					</li>
				</ul>
			))}
		</div>
	);
}
