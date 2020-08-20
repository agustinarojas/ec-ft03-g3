import React from 'react';
import MaterialTable from 'material-table';
import TableCategory from './TableCategory';
import FormProductCat from './FormProductCat';
import axios from 'axios';
import './table.css';
import {connect} from 'react-redux';

function Table({products}) {
	const columns = [
		{title: 'Titulo', field: 'titulo'},
		{title: 'Descripción', field: 'descripcion'},
		{title: 'Precio', field: 'precio', type: 'numeric'},
		{title: 'Stock', field: 'stock', type: 'numeric'},
		{title: 'Imagen', field: 'imagen'},
	];
	const postProduct = product => {
		return axios
			.post('http://localhost:3005/products', product)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
	};
	function deleteProduct(id) {
		return axios.delete('http://localhost:3005/products/' + id);
	}

	function putProducts(product, id) {
		return axios
			.put(`http://localhost:3005/products/${id}`, product)
			.then(res => console.log(res.data))
			.catch(err => console.log(err));
	}
	return (
		<div>
			<MaterialTable
				title="Productos"
				columns={columns}
				data={products}
				editable={{
					onRowAdd: newData => postProduct(newData),
					onRowUpdate: (newData, oldData) => putProducts(newData, oldData.id),
					onRowDelete: oldData => deleteProduct(oldData.id),
				}}
			/>
			<br />
			<TableCategory />
			<br />
			<FormProductCat />
		</div>
	);
}
const mapStateToProps = state => {
	return {
		products: state.products,
	};
};
export default connect(mapStateToProps)(Table);
