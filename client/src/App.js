import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Catalogo from './Components/Catalogo/Catalogo';

function App() {
	const [products, setProducts] = useState([
		{imagen: null, titulo: 'jueguete', precio: '$400', id: 1},
		{imagen: null, titulo: 'otro jueguete', precio: '$500', id: 2},
		{imagen: null, titulo: 'jueguete', precio: '$400', id: 3},
		{imagen: null, titulo: 'otro jueguete', precio: '$500', id: 4},
	]);
	useEffect(() => {
		axios
			.get('http://localhost:3000/products')
			.then(res => console.log(res))
			.catch(err => console.log(err));
	});
	return (
		<div className="App">
			<Route path="/" render={() => <Catalogo products={products} />} />
		</div>
	);
}

export default App;
