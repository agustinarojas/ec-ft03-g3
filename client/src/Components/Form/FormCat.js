import React, {useState} from 'react';
import axios from 'axios';
import './Form.css';
export default function FormCat() {
	const [input, setInput] = useState({
		titulo: '',
		descripcion: '',
	});
	const [select, setSelect] = useState('post');
	const [id, setId] = useState();
	const handleInputChange = event => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = state => {
		switch (select) {
			case 'post':
				axios
					.post('http://localhost:3005/category', state)
					.then(res => console.log(res))
					.catch(err => console.log(err));
				break;
			case 'put':
				axios
					.put(`http://localhost:3005/category/${id}`, state)
					.then(res => console.log(res))
					.catch(err => console.log(err));
				break;
			case 'delete':
				console.log(id);
				axios
					.delete(`http://localhost:3005/category/${id}`)
					.then(res => console.log(res))
					.catch(err => console.log(err));
				break;
		}
	};
	return (
		<form onSubmit={e => handleSubmit(input)} className="formcont">
			<h2 className="tit"> Crear/Modificar Categorías</h2>
			<label> Acción </label>
			<select name="options" onChange={e => setSelect(e.target.value)}>
				<option value="post">Crear</option>
				<option value="put">Modificar</option>
				<option value="delete">Borrar</option>
			</select>
			{select !== 'post' && (
				<span>
					<label> Id </label>
					<input
						type="number"
						name="id"
						placeholder="Agregar..."
						onChange={e => setId(e.target.value)}
					/>
				</span>
			)}
			{select !== 'delete' && (
				<span>
					<label> Titulo </label>
					<input type="text" name="titulo" placeholder="Agregar..." onChange={handleInputChange} />
					<label> Descripcion </label>
					<input
						type="text"
						name="descripcion"
						placeholder="Agregar..."
						onChange={handleInputChange}
					/>
				</span>
			)}
			<input type="submit" value="+" className="btn-success bot" />
		</form>
	);
}
