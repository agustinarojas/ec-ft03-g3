import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {getOrder, getUsers} from '../../Actions/index';
import './order.css';
import Button from '@material-ui/core/Button';
function Orders({orders, getOrder, user, users, getUsers}) {
	const [redir, setRedir] = useState(false);
	useEffect(() => {
		getOrder();
		getUsers();
	}, [orders]);
	console.log(users);
	var precios = [];
	for (let i = 0; i < orders.length; i++) {
		var total = 0;
		var ord = orders[i];
		for (let j = 0; j < ord.products.length; j++) {
			total += ord.products[j].precio;
		}
		precios.push(total);
	}
	if (redir) {
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
									<td>{users?.filter(user => user.id === o.userId)[0]?.email}</td>
									<td> {precios[i]} </td>
									<td>{o?.createdAt?.slice(0, 10)}</td>
									<td>
										<Link to={`/order/${o.id}`}>
											<button className="orderID">DETALLE</button>
										</Link>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			) : (
				<Redirect to="/" />
			)}
			<Button color="secondary" variant="contained" onClick={setRedir}>
				Regresar
			</Button>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		orders: state.orders,
		user: state.user,
		users: state.users,
	};
};

export default connect(mapStateToProps, {getOrder, getUsers})(Orders);
