import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getOrdersUser, getUser } from '../../Actions/index';
import BeautyStars from 'beauty-stars';
import { Link } from 'react-router-dom';


function OrdersUser({user, ordersUser, getOrdersUser, getUser}) {

console.log(ordersUser)
useEffect(() => {
getOrdersUser(user.id);
}, [user]);


		var precios = [];
		for (let i = 0; i < ordersUser.length; i++) {
			var total = 0;
			var ord = ordersUser[i];
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
				{ordersUser?.map((o, i) => (
					<tbody key={o.id}>
						<tr>
							<th scope="row">{o.id}</th>
							<td>User</td>
							<td> {precios[i]} </td>
							<td>{o?.createdAt?.slice(0, 19)}</td>
							<Link to={`/user/order/${o.id}`}>
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


function mapStateToProps(state) {
	return {
		ordersUser: state.ordersUser,
    user: state.user,
	};
}

export default connect(mapStateToProps, {getOrdersUser, getUser})(OrdersUser);
