import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {getOrder, putOrder, getUsers} from '../../Actions/index';
import './order.css';
import Button from '@material-ui/core/Button';
import OrderButtons from './orderButtons';
function Orders({orders, getOrder, user, putOrder, users, getUsers}) {
	const [redir, setRedir] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		getUsers();
	}, []);

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
	console.log(orders);
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
							<OrderButtons
								id={o.id}
								userId={o.userId}
								precio={o.precio}
								createdAt={o.createdAt}
								estado={o.estado}
								putOrder={putOrder}
								users={users}
								products={o.products}
							/>
						))}
					</table>
				</div>
			) : (
				<Redirect to="/" />
			)}
			<Button
				style={{marginTop: '2%', marginLeft: '2%'}}
				color="secondary"
				variant="contained"
				onClick={setRedir}>
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

export default connect(mapStateToProps, {getOrder, putOrder, getUsers})(Orders);
