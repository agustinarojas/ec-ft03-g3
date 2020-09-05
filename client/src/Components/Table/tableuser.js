import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import './table.css';
import {connect} from 'react-redux';
import {deleteUsers, makeAdmin, getUsers} from '../../Actions/index';

function TableUser({users, deleteUsers, makeAdmin, getUsers}) {
	users.forEach(client => (client.cliente = client.nombre + ' ' + client.apellido));
	const columns = [
		{title: 'Cliente', field: 'cliente'},
		{title: 'Email', field: 'email', type: 'string'},
		{title: 'rol', field: 'admin', lookup: {false: 'cliente', true: 'administrador'}},
	];
	useEffect(() => {
		getUsers();
	}, [users]);
	return (
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
	);
}

const mapStateToProps = state => {
	return {
		users: state.users,
	};
};
export default connect(mapStateToProps, {deleteUsers, makeAdmin, getUsers})(TableUser);
