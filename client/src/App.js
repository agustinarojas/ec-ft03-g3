import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Catalogo from './Components/Catalogo/Catalogo';

function App() {
	const [products, setProducts] = useState([
		{imagen: null, titulo: 'jueguete', precio: '$400', id: 1},
	]);
	return (
		<div className="App">
			<Route path="/" render={() => <Catalogo products={products} />} />
		</div>
	);
}

export default App;
