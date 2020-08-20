import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import Catalogo from './Components/Catalogo/Catalogo';
import Products from './Components/product/producto';
import Table from './Components/Table/Table';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Carrito/Cart';
import FormUsuario from './Components/FormUsuario/FormUsuario';
import {getProducts, getCategories} from './Actions/index';
import {connect} from 'react-redux';

function App({productos, catProducts, getProducts, getCategories, categories}) {
	const [buscar, setBuscar] = useState('');
	// const apiRequest = buscar => {
	// 	let url = buscar ? `search?valor=${buscar}` : 'products';
	// 	axios
	// 		.get(`http://localhost:3005/${url}`)
	// 		.then(res => setProducts(res.data))
	// 		.catch(err => console.log(err));
	// };

	const filtrar = id => {
		return productos.filter(product => product.id == id);
	};
	useEffect(() => {
		getProducts();
		getCategories();
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
			<Route path="/:category" render={() => <Catalogo products={catProducts} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>
			<Route path="/cart" render={() => <Cart products={productos} />} />
			<Route path="/sign_up" component={FormUsuario} />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		productos: state.products,
		catProducts: state.catProducts,
		categories: state.categories,
	};
};
export default connect(mapStateToProps, {getProducts, getCategories})(App);
