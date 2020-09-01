import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

function user({user}) {
	const handleOnClick = () => {
		axios
			.get('http://localhost:3005/auth/logout', {withCredentials: true})
			.then(res => console.log(res))
			.catch(error => console.log(error));
	};
var click = false;
//console.log(click)
	//console.log(user);
	return (
		<div>

			{user.id ? (
				<div>

				<h1>
				{user.nombre} {user.apellido}
			</h1>
			<p> {user.email} </p>
			<Link to='/RestablecerContraseña'>
			  <span>Cambiar contraseña</span>
			</Link>
		</div>
		): (
			<Redirect to = "/sign_up" />
		)}
		</div>
		);
	}
function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(user);
