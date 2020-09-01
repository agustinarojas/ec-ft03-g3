import React from 'react';
import MaterialTable from 'material-table';
import './table.css';
import {connect} from 'react-redux';
import {deleteUsers} from '../../Actions/index';
import axios from 'axios';

function tableUser({users, deleteUsers}) {
	function makeAdmin(id) {
		console.log('IDDDDD' + id);
		return axios
			.post(`http://localhost:3005/auth/promote/${id}`, null,  {withCredentials: true})
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}
	const columns = [
		{title: 'Nombre', field: 'nombre'},
		{title: 'Apellido', field: 'apellido'},
		{title: 'Email', field: 'email', type: 'string'},
		{title: 'rol', field: 'admin', lookup: {f: 'cliente', t: 'administrador'}},
	];
	return (
		<div>
			<MaterialTable
				title="Usuarios"
				columns={columns}
				data={users}
				editable={{
					onRowUpdate: (newData, oldData) => makeAdmin(oldData.id),
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
export default connect(mapStateToProps, {deleteUsers})(tableUser);
