import React, {useState} from 'react';
import {connect} from 'react-redux';
import OrderProdItem from './OrderProdItem';

function OrderProducts({ordersUser, match, user}) {
	var ord = ordersUser?.filter(o => o?.id == match?.params?.id);
	var prods = ord[0]?.products;
	var total = 0;
	for (let i = 0; i < prods?.length; i++) {
		total += prods[i]?.precio * prods[i]?.lineorder?.cantidad;
	}

	return (
		<div>
			<h1>NRO ORDEN: {ord[0]?.id}</h1>
			<h3>Fecha: {ord[0]?.createdAt.slice(0, 10)}</h3>
			<h3>Hora: {ord[0]?.createdAt.slice(11, 19)}</h3>
			<div>
				<h3>Productos:</h3>{' '}
				{prods?.map(p => (
					<OrderProdItem
						titulo={p.titulo}
						precio={p.precio}
						cantidad={p.lineorder.cantidad}
						imagen={p.imagen}
						key={p.id}
						id={p.id}
						user={user}
					/>
				))}
			</div>
			<h2>TOTAL : {total}</h2>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		orders: state.orders,
		ordersUser: state.ordersUser,
		user: state.user,
	};
};
export default connect(mapStateToProps)(OrderProducts);
