import React, {useState} from 'react';
import {Route} from 'react-router-dom';
// import './App.css';
import Catalogo from './Components/Catalogo/Catalogo';
import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:3001/products'});

function App() {
	(function () {
		console.log('hi');
		api.get('/').then(res => console.log(res));
	})();
	const [products, setProducts] = useState([
		{imagen: null, titulo: 'jueguete', precio: '$400', id: 1},
		{imagen: null, titulo: 'otro jueguete', precio: '$500', id: 2},
	]);
	return (
		<div className="App">
			<Route path="/" render={() => <Catalogo products={products} />} />
		</div>
	);
}

export default App;
