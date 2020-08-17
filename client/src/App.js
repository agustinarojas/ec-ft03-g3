import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import Catalogo from './Components/Catalogo/Catalogo';
import Products from './Components/product/producto';
import Form from './Components/Form/Form';
import FormCat from './Components/Form/FormCat';
import NavBar from './Components/NavBar/NavBar';
function App() {
	const [products, setProducts] = useState([]);
	const [buscar, setBuscar] = useState('');
	const apiRequest = buscar => {
		let url = buscar ? `search?valor=${buscar}` : 'products';
		axios
			.get(`http://localhost:3005/${url}`)
			.then(res => setProducts(res.data))
			.catch(err => console.log(err));
	};

	function filterCat(categoria) {
		axios
			.get(`http://localhost:3005/products/categorias/${categoria}`)
			.then(res => {
				setProducts(res.data);
			})
			.catch(err => console.log(err));
	}
	const filtrar = id => {
		return products.filter(product => product.id == id);
	};

	useEffect(() => {
		apiRequest(buscar);
	}, [buscar]);

	const search = input => {
		setBuscar(input);
	};
	return (
		<div className="product">
			<NavBar search={search} />
			<Route exact path="/form" render={() => <Form products={products} />} />
			<Route path="/form" component={FormCat} />
			<Route exact path="/" render={() => <Catalogo products={products} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>
		</div>
	);
}
export default App;
