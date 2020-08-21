import React, {useState, useEffect} from 'react';
import './Item.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getCarrito} from '../../Actions/index';

function Item({productsCar, getCarrito, match}) {
	const [cantidad, setCantidad] = useState(1);
	let {userId} = match.params;
	const handleOnCLick = id => {
		setCantidad(cantidad - 1);
		axios
			.delete(`http://localhost:3005/users/1/cart/${id}`)
			.then(res => res.data)
			.catch(err => console.log(err));
	};
	const handleOnCLickCantidad = cantidad => {
		setCantidad(cantidad + 1);
		console.log(cantidad);
		axios
			.put(`http://localhost:3005/users/1/cart`, {cantidad})
			.then(res => res.data)
			.catch(err => console.log(err));
	};

	useEffect(() => {
		getCarrito(userId);
	}, [cantidad]);
	return (
		<div className="carritoItem">
			{productsCar?.map((p, i) => (
				<ul className="list-group list-group-flush cartitem" key={i}>
					<li className="list-group-item disp itemind">
						<img className="imgCart" src={p.imagen} />
						<div className="titdes">
							<p className="tituloo">{p.titulo}</p>
							<p>{p.descripcion}</p>
						</div>
						<div className="botooon">
							<button className="btn botoncart" onClick={e => handleOnCLickCantidad(e.target.name)}>
								-
							</button>
							<input onChange={e => setCantidad(e.target.value)} className="inpCant" />
							<button className="btn botoncart" onClick={e => handleOnCLickCantidad(e.target.name)}>
								+
							</button>
							<button name={p.id} onClick={e => handleOnCLick(e.target.name)}>
								X
							</button>
						</div>
						<div className="precioboton">
							<p id="presio">$ {p.precio} </p>
							<button id="boton1" name={p.id} onClick={e => handleOnCLick(e.target.name)}>
								X
							</button>
						</div>
					</li>
				</ul>
			))}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		productsCar: state.productsCar,
	};
};
export default connect(mapStateToProps, {getCarrito})(Item);
