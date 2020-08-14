import React, {useState} from 'react';
import axios from 'axios';

export default function Form() {
	const [input, setInput] = useState({
		titulo: '',
		descripcion: '',
		precio: 0,
		stock: 0,
		imagen: '',
	});

	const handleInputChange = event => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = state => {
		axios
			.post('http://localhost:3005/products', state)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};
	return (
		<form onSubmit={e => handleSubmit(input)}>
			<label> Titulo </label>
			<input type="text" name="titulo" placeholder="Agregar..." onChange={handleInputChange} />
			<label> Descripcion </label>
			<input type="text" name="descripcion" placeholder="Agregar..." onChange={handleInputChange} />
			<label> Precio </label>
			<input type="number" name="precio" placeholder="Agregar..." onChange={handleInputChange} />
			<label> Stock </label>
			<input type="number" name="stock" placeholder="Agregar..." onChange={handleInputChange} />
			<label> Imagen</label>
			<input type="text" name="imagen" placeholder="Agregar..." onChange={handleInputChange} />
			<input type="submit" />
		</form>
	);
}
