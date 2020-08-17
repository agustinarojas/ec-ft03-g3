import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Form.css';

export default function Form({products}) {
	const [input, setInput] = useState({
		titulo: '',
		descripcion: '',
		precio: 0,
		stock: 0,
		imagen: '',
		categoria: '',
	});
	const [select, setSelect] = useState('post');
	const [id, setId] = useState();
	const [catId, setCatId] = useState();
	const [selectCat, setSelectCat] = useState('post');
	const handleInputChange = event => {
		setInput({
			...input,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (e, state) => {
		e.preventDefault();
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
				axios
					.delete(`http://localhost:3005/products/${id}`)
					.then(res => console.log(res))
					.catch(err => console.log(err));
				break;
		}
	};
	const setCategory = event => {
		event.preventDefault();
		switch (selectCat) {
			case 'post':
				axios.post(`http://localhost:3005/products/${id}/category/${catId}`);
		}
	};
	return (
		<div>
			<table class="table table-striped table-dark">
				<thead>
					<tr>
						<th scope="col">Id</th>
						<th scope="col">Titulo</th>
						<th scope="col">Descripcion</th>
						<th scope="col">Precio</th>
						<th scope="col">Stock</th>
						<th scope="col">Imagen</th>
						<th scope="col">Categoría</th>
						<th scope="col">Acción</th>
					</tr>
				</thead>
				<tbody>
					{products?.map((p, i) => (
						<tr>
							<th scope="row">{p.id}</th>
							<td>{p.titulo}</td>
							<td>{p.descripcion}</td>
							<td>{p.precio}</td>
							<td>{p.stock}</td>
							<td>{p.imagen}</td>
							<td>{p.categoria}</td>
							<td></td>
						</tr>
					))}
				</tbody>
			</table>
			<form className="formulario" onSubmit={e => handleSubmit(e, input)}>
				<span className="clase">
					<label> Acción </label>
					{select !== 'delete' && (
						<span className="labels">
							<label> Titulo </label>
							<label> Descripcion </label>
							<label> Precio </label>
							<label> Stock </label>
							<label> Imagen</label>
							<label> Id Categ</label>
						</span>
					)}
					{select !== 'post' && <label> Id </label>}
				</span>
				<span className="clase">
					<select name="options" onChange={e => setSelect(e.target.value)}>
						<option value="post">Crear</option>
						<option value="put">Modificar</option>
						<option value="delete">Borrar</option>
					</select>

					{select !== 'delete' && (
						<span className="inputs">
							<input
								type="text"
								name="titulo"
								placeholder="Agregar..."
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="descripcion"
								placeholder="Agregar..."
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="precio"
								placeholder="Agregar..."
								onChange={handleInputChange}
							/>
							<input
								type="number"
								name="stock"
								placeholder="Agregar..."
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="imagen"
								placeholder="Agregar..."
								onChange={handleInputChange}
							/>
							<input
								type="text"
								name="categoria"
								placeholder="Agregar..."
								onChange={handleInputChange}
							/>
						</span>
					)}
					{select !== 'post' && (
						<input
							type="number"
							name="id"
							placeholder="Agregar..."
							onChange={e => setId(e.target.value)}
						/>
					)}
					<input type="submit" value="+" className="btn btn-success" />
				</span>
			</form>

			<form onSubmit={setCategory} className="formcont">
				<h2 className="tit"> Agregar Categorías a un Producto</h2>
				<span className="labelcat">
					<label> Acción </label>
					<label> Id Producto </label>
					<label> Id Categoria </label>
				</span>
				<span className="inputcat">
					<select name="options" onChange={e => setSelectCat(e.target.value)}>
						<option value="post">Agregar</option>
						<option value="delete">Eliminar</option>
					</select>
					<input
						type="number"
						name="productId"
						placeholder="Agregar..."
						onChange={e => setId(e.target.value)}
					/>
					<input
						type="number"
						name="catId"
						placeholder="Agregar..."
						onChange={e => setCatId(e.target.value)}
					/>
					<input type="submit" value="+" className="bot btn-success" />
				</span>
			</form>
		</div>
	);
}
