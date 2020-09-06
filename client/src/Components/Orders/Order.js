import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {getOrder} from '../../Actions/index';
import './order.css';
import Button from '@material-ui/core/Button';
function Orders({orders, getOrder, user}) {
	const [redir, setRedir] = useState(false);
	const [error, setError] = useState(false)
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
	if (redir && !error) {
		return <Redirect to="/settings" />;
	}

	return (
		<div>

		{user.admin ? (
			<div>
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
	</div>
	) : (
		<Redirect to = "/" />
	)	}
	<Button style={{marginTop: '2%', marginLeft: '2%'}}color = "secondary" variant= "contained" onClick= {setRedir}>
			Regresar
			</Button>
		
</div>
	);
}

const mapStateToProps = (state) => {
	return {
		orders: state.orders,
		user: state.user
	};
};

export default connect(mapStateToProps, {getOrder})(Orders);
