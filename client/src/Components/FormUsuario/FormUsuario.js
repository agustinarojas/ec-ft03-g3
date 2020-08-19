import React, {useState} from 'react';
import axios from 'axios';

export default function FormUsuario() {
	const [email, setEmail] = useState({email: ''});

	const handleSubmit = (event, email) => {
		event.preventDefault();
		axios
			.post('http://localhost:3005/users', email)
			.then(res => console.log(res))
			.catch(error => console.log(error));
	};

	return (
		<form onSubmit={e => handleSubmit(e, email)}>
			<div class="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input
					type="email"
					class="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					onChange={e => setEmail({email: e.target.value})}
				/>
				<small id="emailHelp" class="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<input type="submit" class="btn btn-primary" value="Submit" />
		</form>
	);
}
