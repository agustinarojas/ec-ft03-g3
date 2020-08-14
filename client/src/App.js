import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import Catalogo from './Components/catalogo/Catalogo';
import Products from './Components/producto';
import Form from './Components/Form/Form';

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
	useEffect(() => {
		apiRequest(buscar);
	}, [buscar]);

	const search = input => {
		setBuscar(input);
	};
	return (
		<div className="product">
			<SearchBar search={search} />
			<Form />
			<Route path="/" render={() => <Catalogo products={products} />} />
			<Route path="/product/:id" render={({match}) => <Products producto={match.params.id} />} />
		</div>
	);
}
function filterCat (categoria) {
	axios.get (`http://localhost:3005/products/categorias/${categoria}`)
	.then(res => {
		setProducts(res.data)
	})
	.catch(err)
}
export default App;
