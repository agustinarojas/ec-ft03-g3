import React, {useState} from 'react';
import axios from 'axios';
import './Form.css'

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
		<form className = "formulario" onSubmit={e => handleSubmit(input)}>
			<label><strong> Titulo </strong></label>
			<input type="text" name="titulo" placeholder="Agregar..." onChange={handleInputChange} />
			<label><strong> Descripcion</strong></label>
			<textarea type="text" name="descripcion" placeholder="Agregar..." onChange={handleInputChange} />
			<label> <strong> Precio</strong></label>
			<input type="number" name="precio" placeholder="Agregar..." onChange={handleInputChange} />
			<label><strong> Stock </strong></label>
			<input type="number" name="stock" placeholder="Agregar..." onChange={handleInputChange} />
			<label><strong> Imagen </strong></label>
			<input type="text" name="imagen" placeholder="Agregar..." onChange={handleInputChange} />
			<input type="submit" />
		</form>
	);
}
