import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import SearchBar from './Components/SearchBar/SearchBar';
import Catalogo from './Components/Catalogo/Catalogo';
import Products from './Components/producto';

function App() {
	const [products, setProducts] = useState([
		{imagen: null, titulo: 'jueguete', precio: '$400', id: 1},
		{imagen: null, titulo: 'otro jueguete', precio: '$500', id: 2},
	]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/products')
			.then(res => console.log(res))
			.catch(err => console.log(err));
	});
	const search = input => {
		console.log(input);
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
