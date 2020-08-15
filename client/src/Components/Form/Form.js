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
	const [select, setSelect] = useState('post');
	const [id, setId] = useState();
	const [selectCat, setSelectCat] = useState('post');
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
					.post('http://localhost:3005/products', state)
					.then(res => console.log(res))
					.catch(err => console.log(err));
				break;
			case 'put':
				axios
					.put(`http://localhost:3005/products/${id}`, state)
					.then(res => console.log(res))
					.catch(err => console.log(err));
				break;
			case 'delete':
				console.log(id);
				axios
					.delete(`http://localhost:3005/products/${id}`)
					.then(res => console.log(res))
					.catch(err => console.log(err));
				break;
		}
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

		<div>
			<form onSubmit={e => handleSubmit(input)}>
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
						<input
							type="text"
							name="titulo"
							placeholder="Agregar..."
							onChange={handleInputChange}
						/>
						<label> Descripcion </label>
						<input
							type="text"
							name="descripcion"
							placeholder="Agregar..."
							onChange={handleInputChange}
						/>
						<label> Precio </label>
						<input
							type="number"
							name="precio"
							placeholder="Agregar..."
							onChange={handleInputChange}
						/>
						<label> Stock </label>
						<input
							type="number"
							name="stock"
							placeholder="Agregar..."
							onChange={handleInputChange}
						/>
						<label> Imagen</label>
						<input
							type="text"
							name="imagen"
							placeholder="Agregar..."
							onChange={handleInputChange}
						/>
					</span>
				)}
				<input type="submit" />
			</form>
			<form>
				<h2> Categorías</h2>
				<label> Acción </label>
				<select name="options" onChange={e => setSelectCat(e.target.value)}>
					<option value="post">Agrgar</option>
					<option value="delete">Eliminar</option>
				</select>
				<label> Id del Producto </label>
				<input type="number" name="productId" placeholder="Agregar..." />
				<label> Id de la Categoria </label>
				<input type="number" name="catId" placeholder="Agregar..." />
				<input type="submit" />
			</form>
		</div>

	);
}
