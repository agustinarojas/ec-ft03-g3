import React from 'react';
import MaterialTable from 'material-table';
import {setCategory, deleteProdCategory} from '../../Actions/index.js';
import {connect} from 'react-redux';

function TableProductCat({setCategory, deleteProdCategory}) {
	const columns = [
		{title: 'Titulo Producto', field: 'id'},
		{title: 'Titulo Categoría', field: 'id'},
	];

	return (
		<MaterialTable
			title="Product/Category"
			columns={columns}
			data={}
			editable={{
				onRowAdd: newData => setCategory(newData.id),
				onRowDelete: oldData => deleteProdCategory(oldData.id),
			}}
		/>
	);
}
const mapStateToProps = state => {
	return {
		categories: state.categories,
		products: state.products,
		product: state.product,
		putProduct: state.putProduct,
	};
};
export default connect(mapStateToProps, {
	setCategory,
})(TableProductCat);
