import React, { useState, useEffect } from 'react';
import Item from './Item';
import axios from 'axios';
import './cart.css';
import { connect } from 'react-redux';
import { emptyCart, getCarrito } from '../../Actions/index';

function Cart({ match, emptyCart, productsCar, getCarrito }) {
	const [can, setCantid] = useState(1);
	const [precio, setPrecio] = useState(0)
	let userId = match?.params?.userId;

	var total = {}
	const handlePrice = function (cant, id, price) {
		total[id] = cant * price
		let precios = 0
		for (let i=0; i < Object.values(total).length; i++){
		precios += Object.values(total)[i]
		}
		console.log(precios)
		//setPrecio(precios)
		
	}	

	const comprar = () => {
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
					cantidad={p?.lineorder?.cantidad}
					key={i}
					hand = {handlePrice}
				/>
			))}
			{productsCar.length > 0 ? 
			<h2 id='total'>TOTAL: ${precio}</h2> : <div className= 'noProducts'>Aún no agregaste productos al carrito.</div>}
			{productsCar.length > 0 ? 
			<button id="vaciar" onClick={() => emptyCart(1)}>
				Vaciar
			</button> : ''}
			{productsCar.length > 0 ?
			<button id="compra" onClick={() => comprar()}>
				Checkout
			</button> : ''}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		productsCar: state.productsCar,
	};
}
export default connect(mapStateToProps, { emptyCart, getCarrito })(Cart);
