import React from 'react';
import MaterialTable from 'material-table';
import TableCategory from './TableCategory';
import FormProductCat from './FormProductCat';
import {
	addProduct,
	putProduct,
	deleteProduct,
	setCategory,
	deleteProdCategory,
} from '../../Actions/index.js';
import './table.css';
import {connect} from 'react-redux';

function Table({
	products,
	addProduct,
	putProduct,
	deleteProduct,
	categories,
	setCategory,
	deleteProdCategory,
}) {
	const catOptions = {};
	categories.map(category => {
		const {id, titulo} = category;
		catOptions[id] = titulo;
	});
	const columns = [
		{title: 'Titulo', field: 'titulo'},
		{title: 'Descripción', field: 'descripcion'},
		{title: 'Precio', field: 'precio', type: 'numeric'},
		{title: 'Stock', field: 'stock', type: 'numeric'},
		{title: 'Categoría', field: 'category', lookup: catOptions},
		{title: 'Imagen', field: 'imagen'},
	];
	return (
		<div>
			<MaterialTable
				title="Productos"
				columns={columns}
				data={products}
				editable={{
					onRowAdd: newData => addProduct(newData),
					onRowUpdate: (newData, oldData) =>
						setCategory(newData) || putProduct(newData, oldData.id),
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
		categories: state.categories,
	};
};
export default connect(mapStateToProps, {
	addProduct,
	putProduct,
	deleteProduct,
	setCategory,
	deleteProdCategory,
})(Table);
