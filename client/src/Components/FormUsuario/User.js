import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

function user({user}) {
	const handleOnClick = () => {
		axios
			.get('http://localhost:3005/auth/logout', {withCredentials: true})
			.then(res => console.log(res))
			.catch(error => console.log(error));
	};
	console.log(user);
	return (
		<div>
			<h1>
				{user.nombre} {user.apellido}
			</h1>
			<p> {user.email} </p>
		</div>
	);
}
function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

export default connect(mapStateToProps)(user);
