import React, {useState} from 'react';
import axios from 'axios';

export default function FormUsuario() {
	const [email, setEmail] = useState('');

	const handleSubmit = (event, email) => {
		event.preventDefaul();
		axios.post('http://localhost/users', {email});
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
					onChange={e => setEmail(e.target.value)}
				/>
				<small id="emailHelp" class="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<input type="submit" class="btn btn-primary" value="Submit" />
		</form>
	);
}
