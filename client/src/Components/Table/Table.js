import React from 'react';
import MaterialTable from 'material-table';
import TableCategory from './TableCategory';
import {addProduct, putProduct, deleteProduct} from '../../Actions/index.js';
import './table.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';

function Table({products, addProduct, putProduct, deleteProduct, user}) {
	const columns = [
		{title: 'Titulo', field: 'titulo'},
		{title: 'Descripción', field: 'descripcion'},
		{title: 'Precio', field: 'precio', type: 'numeric'},
		{title: 'Stock', field: 'stock', type: 'numeric'},
		// {title: 'Categoría', field: 'category', lookup: catOptions},
		{
			title: 'Imagen',
			field: 'imagen',
			render: rowData => <img src={rowData.imagen} style={{width: 100}} />,
		},
	];
	return (
		<div>
			{user.admin ? (
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
					<TableProductCat />
				</div>
			) : (
				<Redirect to="/" />
			)}
		</div>
	);
}
const mapStateToProps = state => {
	return {
		products: state.products,
		user: state.user,
	};
};
export default connect(mapStateToProps, {
	addProduct,
	putProduct,
	deleteProduct,
})(Table);
