import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Catalogo from './Components/Catalogue/Catalogo';
import Products from './Components/product/producto';
import Table from './Components/Table/Table';
import Cart from './Components/Carrito/Cart';
import NavBar from './Components/NavBar/NavBar';
import Orders from './Components/Orders/Order';
import Order from './Components/Orders/OrderI';
import FormUsuario from './Components/FormUsuario/FormUsuario';

import {getProducts, getCategories, searchProduct, getOrder} from './Actions/index';
import {connect} from 'react-redux';

<<<<<<< HEAD
function App({productos, catProducts, getProducts, getCategories, categories, carrito, searchProduct, getOrder, orders}) {
=======
function App({
	productos,
	catProducts,
	getProducts,
	getCategories,
	categories,
	carrito,
	searchProduct,
	getOrder,
	orders,
}) {
>>>>>>> 53ae8bcb1580f6362fe017ca2eab78409a46db39
	const [buscar, setBuscar] = useState('');

	const filtrar = id => {
		return productos.filter(product => product.id == id);
	};

	useEffect(() => {
		//getProducts();
		getCategories();
		searchProduct(buscar);
	}, [buscar]);

	const search = input => {
		setBuscar(input);
	};

	return (
		<div className="product">
			<NavBar search={search} category={categories} />
			<Route
				exact
				path="/admin"
				render={() => <Table products={productos} categories={categories} />}
			/>
			<Route exact path="/" render={() => <Catalogo products={productos} />} />
			<Route path="/category/:category" render={() => <Catalogo products={catProducts} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>
			<Route path="/orders" render={() => <Orders orders={orders} />} />
<<<<<<< HEAD
			<Route 
			path="/order/:id" 
			component={ Order }
			/>  
=======
			<Route path="/order/:id" component={Order} />
>>>>>>> 53ae8bcb1580f6362fe017ca2eab78409a46db39
			<Route path="/cart/:userId" component={Cart} />
			<Route path="/sign_up" component={FormUsuario} />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		productos: state.products,
		catProducts: state.catProducts,
		categories: state.categories,
		orders: state.orders,
	};
};
export default connect(mapStateToProps, {getProducts, getCategories, searchProduct, getOrder})(App);
