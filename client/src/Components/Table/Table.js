import React from 'react';
import MaterialTable from 'material-table';
import TableCategory from './TableCategory';
import FormProductCat from './FormProductCat';
import {addProduct, putProduct, deleteProduct} from '../../Actions/index.js';
import axios from 'axios';
import './table.css';
import {connect} from 'react-redux';

function Table({products, addProduct, putProduct, deleteProduct}) {
	const columns = [
		{title: 'Titulo', field: 'titulo'},
		{title: 'Descripción', field: 'descripcion'},
		{title: 'Precio', field: 'precio', type: 'numeric'},
		{title: 'Stock', field: 'stock', type: 'numeric'},
		{title: 'Imagen', field: 'imagen'},
	];

	function deleteProduc(id) {
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
					onRowAdd: newData => addProduct(newData),
					onRowUpdate: (newData, oldData) => putProduct(newData, oldData.id),
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
export default connect(mapStateToProps, {addProduct, putProduct, deleteProduct})(Table);
