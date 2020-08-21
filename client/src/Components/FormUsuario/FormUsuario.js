import React, {useState} from 'react';
import axios from 'axios';
import './Form.css'

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
		<div className = 'Formm'>
		<form onSubmit={e => handleSubmit(e, email)}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					onChange={e => setEmail({email: e.target.value})}
				/>
				<small id="emailHelp" className="form-text text-muted">
					No compartiremos tu e-mail con nadie.
				</small>
			</div>
			<input type="submit" className="btn btn-primary" value="Submit" />
		</form>
		</div>
	);
}
