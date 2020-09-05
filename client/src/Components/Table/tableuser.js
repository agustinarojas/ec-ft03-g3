import React from 'react';
import MaterialTable from 'material-table';
import './table.css';
import {connect} from 'react-redux';
import {deleteUsers, makeAdmin} from '../../Actions/index';
import axios from 'axios';
function tableUser({users, deleteUsers, makeAdmin}) {
	users.forEach(client => (client.cliente = client.nombre + ' ' + client.apellido));

	const columns = [
		{title: 'Cliente', field: 'cliente'},
		{title: 'Email', field: 'email', type: 'string'},
		{title: 'rol', field: 'admin', lookup: {false: 'cliente', true: 'administrador'}},
	];
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
export default connect(mapStateToProps, {deleteUsers, makeAdmin})(tableUser);
