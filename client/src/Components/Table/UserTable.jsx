import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';
import './table.css';
import {connect} from 'react-redux';
import {deleteUsers, makeAdmin, getUsers} from '../../Actions/index';
import {Redirect} from 'react-router';

function TableUser({user, users, deleteUsers, makeAdmin, getUsers, clase}) {
	users.forEach(client => (client.cliente = client.nombre + ' ' + client.apellido));
	const columns = [
		{title: 'Cliente', field: 'cliente'},
		{title: 'Email', field: 'email', type: 'string'},
		{title: 'rol', field: 'admin', lookup: {false: 'cliente', true: 'administrador'}},
	];
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className={clase} >
			{user.admin ? (
				<div>
					<MaterialTable
						title="Usuarios"
						columns={columns}
						data={users}
						editable={{
							onRowUpdate: (oldData, newData) => makeAdmin(oldData.id, newData),
							onRowDelete: oldData => deleteUsers(oldData.id),
						}}
					/>
				</div>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
}

const mapStateToProps = state => {
	return {
		user: state.user,
		users: state.users,
	};
};
export default connect(mapStateToProps, {deleteUsers, makeAdmin, getUsers})(TableUser);
