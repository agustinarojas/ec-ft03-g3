import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';
import './cart.css';
import { connect } from 'react-redux';
import { emptyCart, getCarrito } from '../../Actions/index';

function Cart({ match, emptyCart, productsCar, getCarrito }) {
	const [can, setCantid] = useState(1);
	const [precio, setPrecio] = useState()
	let userId = match?.params?.userId;

	var total = {}
	const handlePrice = function (cant, id, precio) {
		total[id] = cant * precio
		var precios = 0
		for (let i=0; i < Object.values(total).length; i++){
			precios += Object.values(total)[i]
		}
		var aux = precios
		console.log(aux)
		//Abri la consola fijate que funciona, si renderizas el estado de precio, en la linea 52, del 'total', deja de funcionar no se porque, no le puedo hacer el setPrecio que funciona mal, fijate si podes agus :c

	}	



	function comprar() {
		return axios
			.put('http://localhost:3005/orders/1', { estado: 'completa' })
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	useEffect(() => {
		getCarrito(userId);
	}, [can]);
	return (
		<div className="flexend">
			{productsCar?.map((p, i) => (
				<Item
					match={match}
					titulo={p.titulo}
					descripcion={p.descripcion}
					imagen={p.imagen}
					precio={p.precio}
					id={p.id}
					stock={p.stock}
					cantidad={p.lineorder.cantidad}
					key={i}
					hand = {handlePrice}
				/>
			))}
			<h2 id='total'>TOTAL: ${}</h2>
			<button id="vaciar" onClick={() => emptyCart(1)}>
				Vaciar
			</button>
			<button id="compra" onClick={() => comprar}>
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
export default connect(mapStateToProps, { emptyCart, getCarrito })(Cart);
