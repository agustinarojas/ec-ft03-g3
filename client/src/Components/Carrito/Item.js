import React from 'react';
import './Item.css';
import axios from 'axios';

export default function Item({}) {
	let products = axios.get('http://localhost:3005/$')
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
