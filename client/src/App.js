import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import Catalogo from './Components/catalogo/Catalogo';
import Products from './Components/product/producto';
import Form from './Components/Form/Form';
import FormCat from './Components/Form/FormCat';

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
			<SearchBar search={search} />
			<Route exact path="/form" component={Form} />
			<Route path="/form/category" component={FormCat} />
			<Route exact path="/" render={() => <Catalogo products={products} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>
		</div>
	);
}
export default App;
