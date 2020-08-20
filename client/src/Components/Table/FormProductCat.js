import React, {useState} from 'react';
import {setCategory, deleteProdCategory} from '../../Actions/index.js';
import {connect} from 'react-redux';

function FormProductCat({setCategory, deleteProdCategory, categories}) {
	const [id, setId] = useState();
	const [catId, setCatId] = useState();
	const [selectCat, setSelectCat] = useState('post');

	const handleCatSubmit = event => {
		event.preventDefault();
		switch (selectCat) {
			case 'post':
				setCategory(id, catId);
				break;
			case 'delete':
				deleteProdCategory(id, catId);
				break;
			default:
				return;
		}
	};
	return (
		<form onSubmit={e => handleCatSubmit(e)} className="formcont">
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
				<select onChange={e => setCatId(e.target.value)}>
					{categories?.map((c, i) => (
						<option key={i} value={c.id}>
							{c.titulo}
						</option>
					))}
				</select>
				<input type="submit" value="+" className="bot btn-success" />
			</span>
		</form>
	);
}

const mapStateToProps = state => {
	return {
		products: state.products,
		catProducts: state.catProducts,
		categories: state.categories,
	};
};
export default connect(mapStateToProps, {
	setCategory,
	deleteProdCategory,
})(FormProductCat);
