import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Catalogo from './Components/catalogo/Catalogo';
import Products from './Components/product/producto';
import Form from './Components/Form/Form';
import FormCat from './Components/Form/FormCat';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Carrito/Cart';
import {getProducts, filterByCategory} from './Actions/index';
import {connect} from 'react-redux';
import FormUsuario from './Components/FormUsuario/FormUsuario';

function App({productos, catProducts, getProducts}) {
	const [buscar, setBuscar] = useState('');
	const [category, setCategory] = useState([]);

	// const apiRequest = buscar => {
	// 	let url = buscar ? `search?valor=${buscar}` : 'products';
	// 	axios
	// 		.get(`http://localhost:3005/${url}`)
	// 		.then(res => setProducts(res.data))
	// 		.catch(err => console.log(err));
	// };

	function getCategory() {
		axios
			.get('http://localhost:3005/category')
			.then(res => {
				setCategory(res.data);
			})
			.catch(err => console.log(err));
	}

	const filtrar = id => {
		return productos.filter(product => product.id == id);
	};
	useEffect(() => {
		getProducts();
		getCategory();
	}, [buscar]);

	const search = input => {
		setBuscar(input);
	};
	return (
		<div className="product">
			<NavBar search={search} category={category} />
			<Route exact path="/form" render={() => <Form products={productos} />} />
			<Route path="/form" component={FormCat} />
			<Route exact path="/" render={() => <Catalogo products={productos} />} />
			<Route path="/:category" render={() => <Catalogo products={catProducts} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>
			<Route path="/cart" render={() => <Cart products={productos} />} />
			<Route path="/usuario" render={() => <FormUsuario products={productos} />} />
		</div>
	);
}

const mapStateToProps = state => {
	return {
		productos: state.products,
		catProducts: state.catProducts,
	};
};
export default connect(mapStateToProps, {getProducts, filterByCategory})(App);
