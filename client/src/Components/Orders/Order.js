import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getOrder} from '../../Actions/index';
import './order.css';

function Orders({orders, getOrder}) {
	console.log(orders);
	var precios = [];
	for (let i = 0; i < orders.length; i++) {
		var total = 0;
		var ord = orders[i];
		for (let j = 0; j < ord.products.length; j++) {
			total += ord.products[j].precio;
		}
		precios.push(total);
	}

	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">ID Orden</th>
					<th scope="col">User</th>
					<th scope="col">Total ($)</th>
					<th scope="col">Fecha</th>
				</tr>
			</thead>
			{orders?.map((o, i) => (
				<tbody key={o.id}>
					<tr>
						<th scope="row">{o.id}</th>
						<td>User</td>
						<td> {precios[i]} </td>
						<td>{o?.createdAt?.slice(0, 19)}</td>
						<Link to={`/order/${o.id}`}>
							<td>
								<button className="orderID">DETALLE</button>
							</td>
						</Link>
					</tr>
				</tbody>
			))}
		</table>
	);
}

const mapStateToProps = state => {
	return {
		orders: state.orders,
	};
};

export default connect(mapStateToProps, {getOrder})(Orders);
