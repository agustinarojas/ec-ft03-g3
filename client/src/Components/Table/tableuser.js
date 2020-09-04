import React,{useState}from 'react';
import MaterialTable from 'material-table';
import './table.css';
import {connect} from 'react-redux';
import {deleteUsers} from '../../Actions/index';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router';



function TableUser({user, deleteUsers,users}) {
	const [redir, setRedir] = useState(false);
	const [error, setError] = useState(false)

	function makeAdmin(id) {
		 return axios
		 	.post(`http://localhost:3005/auth/promote/${id}`, null, {withCredentials: true})
		 	.then(res => console.log(res))
		 	.catch(err => console.log(err));


	}
	users.forEach(client => client.cliente = (client.nombre + ' ' + client.apellido))

	const columns = [
		{title: 'Cliente', field: 'cliente'},
		{title: 'Email', field: 'email', type: 'string'},
		{title: 'rol', field: 'admin', lookup: {false: 'cliente', true: 'administrador'}},
	];
	if (redir && !error) {
		return <Redirect to="/settings" />;
	}

	return (
		<div>
			{user.admin ? (
		<div>
			<MaterialTable
				title="Usuarios"
				columns={columns}
				data={users}
				editable={{
					onRowUpdate: (oldData,newData) => makeAdmin(oldData.id, newData),
					onRowDelete: oldData => deleteUsers(oldData.id),
				}}
			/>
			<Button color = "secondary" variant= "contained" onClick= {setRedir}>
			Regresar
			</Button>
		</div>
			):(
				<Redirect to= "/"/>
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
export default connect(mapStateToProps, {deleteUsers})(TableUser);
