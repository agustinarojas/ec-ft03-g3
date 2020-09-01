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
import LoginUser from './Components/FormUsuario/loginUser';
import tableUser from './Components/Table/tableuser';
import user from './Components/FormUsuario/User';
import RestorePass from './Components/FormUsuario/restorePass.js';
import Footer from './Components/Footer/Footer';
import {getProducts, getCategories, searchProduct, getOrder, getUser} from './Actions/index';
import {connect} from 'react-redux';
import Reviews from './Components/Reviews/Reviews';

function App({productos, catProducts, getCategories, categories, searchProduct, orders, getUser}) {
	const [buscar, setBuscar] = useState('');

	const filtrar = id => {
		return productos.filter(product => product.id == id);
	};

	useEffect(() => {
		getCategories();
		searchProduct(buscar);
		getUser();
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
			<Route path="/order/:id" component={Order} />
			<Route path="/cart/:userId" component={Cart} />
			<Route path="/sign_up" component={FormUsuario} />
			<Route path="/login" component={LoginUser} />
			<Route path="/me" component={user} />
			<Route path="/RestablecerContraseña" render={() => <RestorePass users={getUser} />} />
			<Route path="/users_table" component={tableUser} />
			<Route path="/producto/:prodId/Calificaciones" component={Reviews} />
			<Route path="/" component={Footer} />
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
export default connect(mapStateToProps, {
	getProducts,
	getCategories,
	searchProduct,
	getOrder,
	getUser,
})(App);
