import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import {setCategory, deleteProdCategory, getProducts} from '../../Actions/index.js';
import {connect} from 'react-redux';


function TableProductCat({setCategory, deleteProdCategory, products, categories, getProducts}) {
	useEffect(() => {
		getProducts();
	}, [categories]);

	const catOptions = {};
	categories.map(category => {
		const {id, titulo} = category;
		if (titulo) catOptions[id] = titulo;
	});
	products.map(prod => {
		prod.category = catOptions;
	});
	console.log(products);
	const columns = [
		{title: 'Id Producto', field: 'id'},
		{title: 'Titulo Producto', field: 'titulo'},
		{title: 'Categoría', field: 'category', lookup: catOptions},
	];

	return (
		<MaterialTable
			title="Product/Category"
			columns={columns}
			data={products}
			editable={{
				onRowUpdate: (oldData, newData) => setCategory(oldData.id, oldData.category),
			}}
			detailPanel={[
				{
					icon: 'delete',
					tooltip: 'Eliminar categoría',
					render: rowData => {
						{
							console.log(rowData);
							console.log(products);
						}
						return (
							<ul
								style={{
									fontSize: 40,
									// textAlign: 'center',
									color: 'white',
									backgroundColor: 'rgb(199 199 199)',
								}}>
								{products
									.filter(prod => prod.id === rowData.id)[0]
									.cats.map(cat => (
										<li>
											{cat.titulo}{' '}
											<button
												name={cat.id}
												onClick={e => deleteProdCategory(rowData.id, e.target.name)}
												className="btn btn-danger">
												{' '}
												Eliminar{' '}
											</button>
										</li>
									))}
							</ul>
						);
					},
				},
			]}
		/>
	);
}
const mapStateToProps = state => {
	return {
		categories: state.categories,
		products: state.products,
	};
};
export default connect(mapStateToProps, {
	setCategory,
	deleteProdCategory,
	getProducts,
})(TableProductCat);
