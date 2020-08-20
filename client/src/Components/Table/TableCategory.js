import React from 'react';
import MaterialTable from 'material-table';
import {
	setCategory,
  postCategory,
  putCategory,
  deleteCategory
} from '../../Actions/index.js';
import {connect} from 'react-redux';

function TableCategory({categories, postCategory, putCategory}) {
  const [state, setState] = React.useState({});
  const columns = [
    { title: 'Titulo', field: 'titulo' },
    { title: 'Descripción', field: 'descripcion' }
  ]
  console.log(categories)
  return (
    <MaterialTable
      title="Categorías"
      columns={columns}
      data={categories}
      editable={{
        onRowAdd: (newData) =>
        postCategory(newData)
        ,
        onRowUpdate: (newData, oldData) =>
				putCategory(newData, oldData.id)
        ,
        onRowDelete: (oldData) =>
				deleteCategory(oldData.id)
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
	postCategory,
	putCategory
})(TableCategory);
