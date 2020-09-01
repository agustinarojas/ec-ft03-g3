import React from 'react';
import MaterialTable from 'material-table';
import {postCategory, putCategory, deleteCategory} from '../../Actions/index.js';
import {connect} from 'react-redux';

function TableCategory({categories, postCategory, putCategory, deleteCategory}) {
	const columns = [
		{title: 'Titulo', field: 'titulo'},
		{title: 'Descripción', field: 'descripcion'},
	];
	let cats = [];
	categories.map(category => {
		if (category.titulo) cats.push(category);
	});
	return (
		<MaterialTable
			title="Categorías"
			columns={columns}
			data={cats}
			editable={{
				onRowAdd: newData => postCategory(newData),
				onRowUpdate: (newData, oldData) => putCategory(newData, oldData.id),
				onRowDelete: oldData => deleteCategory(oldData.id),
			}}
		/>
	);
}
const mapStateToProps = state => {
	return {
		categories: state.categories,
	};
};
export default connect(mapStateToProps, {
	deleteCategory,
	postCategory,
	putCategory,
})(TableCategory);
