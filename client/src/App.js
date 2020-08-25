import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Catalogo from './Components/Catalogue/Catalogo';
import Products from './Components/product/producto';
import Table from './Components/Table/Table';
import Cart from './Components/Carrito/Cart';
import NavBar from './Components/NavBar/NavBar';
import axios from 'axios';
import Orders from './Components/Orders/Order';
import Order from './Components/Orders/OrderI';
import FormUsuario from './Components/FormUsuario/FormUsuario';
import {getProducts, getCategories, getOrder} from './Actions/index';
import {connect} from 'react-redux';

function App({
	productos,
	catProducts,
	getProducts,
	getCategories,
	categories,
	carrito,
	orders,
	getOrder,
}) {
	const [buscar, setBuscar] = useState('');
	const apiRequest = () => {
		axios
			.get(`http://localhost:3005/search?valor=${buscar}`)
			.then(res => res.data)
			.catch(err => console.log(err));
	};

	const filtrar = id => {
		return productos.filter(product => product.id == id);
	};

	useEffect(() => {
		getProducts();
		getCategories();
		apiRequest();
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
			<Route path="/categorias/:category" render={() => <Catalogo products={catProducts} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>

			<Route path="/orders" render={() => <Orders orders={orders} />} />
			<Route path="/order/:id" component={Order} />

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
export default connect(mapStateToProps, {getProducts, getCategories, getOrder})(App);
