import React, {useState} from 'react';
import axios from 'axios';

export default function Form() {
	const [input, setInput] = useState({
		titulo: '',
		descripcion: '',
	});

	const handleInputChange = event => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = state => {
		axios
			.post('http://localhost:3005/category', state)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};
	return (
		<form onSubmit={e => handleSubmit(input)}>
			<label> Titulo </label>
			<input type="text" name="titulo" placeholder="Agregar..." onChange={handleInputChange} />
			<label> Descripcion </label>
			<input type="text" name="descripcion" placeholder="Agregar..." onChange={handleInputChange} />
			<input type="submit" />
		</form>
	);
}
