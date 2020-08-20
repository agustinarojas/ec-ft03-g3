import React from 'react';
import MaterialTable from 'material-table';
import TableCategory from './TableCategory';
import FormProductCat from './FormProductCat';
import {
	deleteProduct,
	setCategory,
	deleteProdCategory,
	postProducts,
	putProducts
} from '../../Actions/index.js';
import {connect} from 'react-redux';

function Table({products, postProducts, putProducts}) {
  const [state, setState] = React.useState({});
  const columns = [
    { title: 'Titulo', field: 'titulo' },
    { title: 'Descripción', field: 'descripcion' },
    { title: 'Precio', field: 'precio', type: 'numeric' },
    { title: 'Stock', field: 'stock', type: 'numeric' },
    { title: 'Imagen', field: 'imagen' },
  ]
  return (
		<div>
    <MaterialTable
      title="Productos"
      columns={columns}
      data={products}
      editable={{
        onRowAdd: (newData) =>
        postProducts(newData)
        ,
        onRowUpdate: (newData, oldData) =>
				putProducts(newData, oldData.id)
        ,
        onRowDelete: (oldData) =>
				deleteProduct(oldData.id)
      }}
    />
		<br/>
		<TableCategory/>
		<br/>
		<FormProductCat/>
		</div>
  );
}
const mapStateToProps = state => {
	return {
		products: state.products,
		product: state.product,
		putProduct: state.putProduct,
	};
};
export default connect(mapStateToProps, {
	setCategory,
	deleteProdCategory,
	postProducts,
	putProducts
})(Table);
