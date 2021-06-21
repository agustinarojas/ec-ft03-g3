import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Catalogo from './Components/Catalogue/Catalogue';
import Products from './Components/product/Product';
import Cart from './Components/Cart/Cart';
import NavBar from './Components/NavBar/NavBar';
import Order from './Components/Orders/OrderById';
import FormUsuario from './Components/FormUsuario/FormUsuario';
import LoginUser from './Components/FormUsuario/LoginUser';
import TableUser from './Components/Table/UserTable';
import UserProfile from './Components/FormUsuario/UserProfile';
import RestorePass from './Components/FormUsuario/RestorePass';
import ForgotPassword from './Components/FormUsuario/ForgotPassword';
import UserOrders from './Components/Orders/UserOrder';
import OrderProducts from './Components/Orders/OrderProducts';
import SendForm from './Components/PayForm/SendForm';
import PayForm from './Components/PayForm/PayForm';
import Settings from './Components/Settings/Settings';
import {
	getProducts,
	getCategories,
	searchProduct,
	getOrder,
	getUser,
	getTotalReviews,
} from './Actions/index';
import Footer from './Components/Footer/Footer';
import {connect} from 'react-redux';
import Reviews from './Components/Reviews/Reviews';

function App({
	productos,
	catProducts,
	getCategories,
	categories,
	searchProduct,
	orders,
	getUser,
	getTotalReviews,
	user,
}) {
	const [buscar, setBuscar] = useState('');

	const filtrar = id => {
		return productos.filter(product => product.id == id);
	};

	useEffect(() => {
		getCategories();
		searchProduct(buscar);
		getTotalReviews();
	}, [buscar]);
	
	useEffect(() => {
		getUser();
	}, [])

	const search = input => {
		setBuscar(input);
	};
	console.log(user)
	return (
		<div className="product">
			<NavBar search={search} category={categories} />
			<Route exact path="/" render={() => <Catalogo products={productos} />} />
			<Route path="/category/:category" render={() => <Catalogo products={catProducts} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>
			<Route exact path="/settings" component={Settings} />
			<Route path="/order/:id" component={Order} />
			<Route path="/cart/:userId" component={Cart} />
			<Route path="/sign_up" component={FormUsuario} />
			<Route path="/login" component={LoginUser} />
			<Route path="/me" component={UserProfile} />
			<Route path="/RestablecerContraseña" render={() => <RestorePass users={getUser} />} />
			<Route path="/settings/users_table" component={TableUser} />
			<Route path="/producto/:prodId/Calificaciones" component={Reviews} />
			<Route path="/users/:userId/orders" component={UserOrders} />
			<Route path="/user/order/:id" component={OrderProducts} />
			<Route path="/" component={Footer} />
			<Route path="/sendform" component={SendForm} />
			<Route path="/paymentmethods" component={PayForm} />
			<Route path="/recuperarContraseña" component={ForgotPassword} />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		productos: state.products,
		catProducts: state.catProducts,
		categories: state.categories,
		orders: state.orders,
		user: state.user,
	};
};
export default connect(mapStateToProps, {
	getProducts,
	getCategories,
	searchProduct,
	getOrder,
	getUser,
	getTotalReviews,
})(App);
