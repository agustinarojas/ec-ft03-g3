import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import Catalogo from './Components/Catalogo/Catalogo';
import Products from './Components/producto';

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
			<Route path="/" render={() => <Catalogo products={products} />} />
			<Route path="/product/:id" render={({match}) => <Products producto={match.params.id} />} />
		</div>
	);
}
export default App;
