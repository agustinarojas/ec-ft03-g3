import React from 'react';
import './Item.css';

export default function Item({ products }) {
	return (
		<div className='carritoItem'>
			{products?.map(p => (
				<ul className="list-group list-group-flush cartitem">
					<li class="list-group-item disp">
						<img className='imgCart' src={p.imagen} />
						<div className='titdes'>
							<p>{p.titulo}</p>
							<p>{p.descripcion}</p>
						</div>
						
						<button className="btn botoncart">-</button>
						<p>{p.cantidad} (cantida)</p>
						<button className="btn botoncart">+</button>
						<p>$ {p.precio} </p>
						<button>X</button>
					</li>
				</ul>
			))}
		</div>
	);
}
