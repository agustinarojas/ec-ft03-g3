import React from 'react';
import './Item.css';

export default function Item({ products }) {
	return (
		<div className='carritoItem'>
			{products?.map(p => (
				<ul className="list-group list-group-flush cartitem">
					<li class="list-group-item disp itemind">
						<img className='imgCart' src={p.imagen} />
						<div className='titdes'>
							<p className= 'tituloo'>{p.titulo}</p>
							<p>{p.descripcion}</p>
						</div>
						<div className = 'botooon'>
						<button className="btn botoncart">-</button>
						<p className='acomodo'>{p.cantidad} (cantida)</p>
						<button className="btn botoncart">+</button>
						</div>
						<div className ='precioboton'>
						<p id='presio'>$ {p.precio} </p>
						<button id='boton1'>X</button>
						</div>
					</li>
				</ul>
			))}
		</div>
	);
}
