import React, {useState, useEffect} from 'react';
import Item from './Item';
import axios from 'axios';
import './cart.css';
import {connect} from 'react-redux';
import {emptyCart, getCarrito} from '../../Actions/index';

function Cart({match, emptyCart, productsCar, getCarrito}) {
	const [can, setCantid] = useState(1);
	let userId = match?.params?.userId;
	function comprar() {
		return axios
			.put('http://localhost:3005/orders/1', {estado: 'completa'})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	// useEffect(() => {
	// 	getCarrito(userId);
	// }, [can]);
	console.log(productsCar);
	return (
		<div className="flexend">
			{productsCar?.map((p, i) => (
				<Item
					titulo={p.titulo}
					descripcion={p.descripcion}
					imagen={p.imagen}
					precio={p.precio}
					id={p.id}
					key={i}
				/>
			))}

			<button id="compra" onClick={() => emptyCart(1)}>
				Vaciar
			</button>
			<button id="compra" onClick={comprar}>
				Checkout
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		productsCar: state.productsCar,
	};
}
export default connect(mapStateToProps, {emptyCart, getCarrito})(Cart);
