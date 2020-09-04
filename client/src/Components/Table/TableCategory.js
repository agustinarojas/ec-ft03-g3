import React from 'react';
import {Redirect} from 'react-router';
import MaterialTable from 'material-table';
import {postCategory, putCategory, deleteCategory} from '../../Actions/index.js';
import {connect} from 'react-redux';
import TableProductCat from './TableProductCat';

function TableCategory({categories, postCategory, putCategory, deleteCategory, user}) {
	const columns = [
		{title: 'Titulo', field: 'titulo'},
		{title: 'Descripción', field: 'descripcion'},
	];
	let cats = [];
	categories.map(category => {
		if (category.titulo) cats.push(category);
	});
	return (
		<div>
			{user.admin ? (
				<div>
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
		categories: state.categories,
		user: state.user,
	};
};
export default connect(mapStateToProps, {
	deleteCategory,
	postCategory,
	putCategory,
})(TableCategory);
