import React, {useState, useEffect} from 'react';
import './Item.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteProdCart, setCantidad} from '../../Actions/index';

function Item({titulo, descripcion, imagen, precio, id, deleteProdCart, stock, cantidad}) {
	const [cantidades, setCantidades] = useState(cantidad);
	const handleOnCLickCantidad = (prodId, type) => {
		if (type === 'menos' && cantidades > 1) {
			setCantidades(cantidades - 1);
			axios
				.put(`http://localhost:3005/users/1/cart`, {id: parseInt(prodId), cantidad: cantidades - 1})
				.then(res => res.data)
				.catch(err => console.log(err));
		} else if (type === 'mas' && stock > cantidades) {
			setCantidades(cantidades + 1);
			axios
				.put(`http://localhost:3005/users/1/cart`, {id: parseInt(prodId), cantidad: cantidades + 1})
				.then(res => res.data)
				.catch(err => console.log(err));
		}
	};
	return (
		<div className="carritoItem">
			<ul className="list-group list-group-flush cartitem">
				<li className="list-group-item disp itemind">
					<img className="imgCart" src={imagen} />
					<div className="titdes">
						<p className="tituloo">{titulo}</p>
						<p>{descripcion}</p>
					</div>
					<div className="botooon">
						<button
							className="btn botoncart"
							onClick={e => {
								handleOnCLickCantidad(e.target.name, 'menos');
							}}
							name={id}>
							-
						</button>
						<p className="acomodo">{cantidades}</p>
						<button
							className="btn botoncart"
							onClick={e => {
								handleOnCLickCantidad(e.target.name, 'mas');
							}}
							name={id}>
							+
						</button>
					</div>
					<div className="precioboton">
						<p id="precio">$ {precio} </p>
						<button id="boton1" name={id} onClick={e => deleteProdCart(e.target.name)}>
							X
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default connect(null, {deleteProdCart, setCantidad})(Item);
