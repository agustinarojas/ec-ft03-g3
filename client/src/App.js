import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Catalogo from './Components/catalogo/Catalogo';
import Products from './Components/product/producto';
import Form from './Components/Form/Form';
import FormCat from './Components/Form/FormCat';
import NavBar from './Components/NavBar/NavBar';
function App() {
	const [products, setProducts] = useState([]);
	const [buscar, setBuscar] = useState('');
	const [category, setCategory] = useState([]);
	console.log(category);
	const apiRequest = buscar => {
		let url = buscar ? `search?valor=${buscar}` : 'products';
		axios
			.get(`http://localhost:3005/${url}`)
			.then(res => setProducts(res.data))
			.catch(err => console.log(err));
	};

	function getCategory() {
		axios
			.get('http://localhost:3005/category')
			.then(res => {
				setCategory(res.data);
			})
			.catch(err => console.log(err));
	}

	function filterCat(categoria) {
		axios
			.get(`http://localhost:3005/products/category/${categoria}`)
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
		getCategory();
		console.log(category);
	}, [buscar]);

	const search = input => {
		setBuscar(input);
	};
	return (
		<div className="product">
			<NavBar search={search} category={category} />
			<Route exact path="/form" render={() => <Form products={products} />} />
			<Route path="/form" component={FormCat} />
			<Route exact path="/" render={() => <Catalogo products={products} />} />
			<Route path="/category" render={() => <Catalogo products={products} />} />
			<Route
				path="/product/:id"
				render={({match}) => <Products producto={filtrar(match.params.id)} />}
			/>
		</div>
	);
}
export default App;
