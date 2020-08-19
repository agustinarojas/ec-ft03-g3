import React from 'react';
import MaterialTable from 'material-table';
import {
	deleteProduct,
	setCategory,
	deleteProdCategory,
	postProducts,
	putProducts,
} from '../Actions/index.js';
import {connect} from 'react-redux';

function Table({products, postProducts}) {
  const [state, setState] = React.useState({
    // columns: [
    //   { title: 'Titulo', field: 'Titulo' },
    //   { title: 'Descripción', field: 'Descripción' },
    //   { title: 'Precio', field: 'Precio', type: 'numeric' },
    //   { title: 'Stock', field: 'Stock', type: 'numeric' },
    //   { title: 'Imagen', field: 'Imagen' },
    // ],
   });

   const data = products;

console.log(data)
  const columns = [
    { title: 'Titulo', field: 'Titulo' },
    { title: 'Descripción', field: 'Descripción' },
    { title: 'Precio', field: 'Precio', type: 'numeric' },
    { title: 'Stock', field: 'Stock', type: 'numeric' },
    { title: 'Imagen', field: 'Imagen' },
  ]
  return (
    <MaterialTable
      title="Productos"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>

          new Promise((resolve) => {

            setTimeout(() => {
              resolve();
              setState((prevState) => {
                postProducts(newData)
                 const data = [...prevState.data];
                 data.push(newData);
                 return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            console.log(oldData)
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
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
	putProducts,
})(Table);
