import React, {useState} from 'react';
import axios from 'axios';
import './Form.css';
import {connect} from 'react-redux';
import {postCategory, putCategory, deleteCategory} from '../../Actions/index';

function FormCat({postCategory, putCategory}) {
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
				postCategory(state);
				break;
			case 'put':
				putCategory(state, id);
				break;
			case 'delete':
				deleteCategory(id);
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
const mapStateToProps = state => {
	return {
		category: state.category,
		putCat: state.putCat,
		products: state.products,
	};
};
export default connect(mapStateToProps, {postCategory, putCategory, deleteCategory})(FormCat);
