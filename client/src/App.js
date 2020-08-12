import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Catalogo from './Components/Catalogo/Catalogo';

function App() {
	const x = {imagen: null, titulo: 'juguete', precio: '$400'};
	return (
		<div className="App">
			<Route path="/" render={() => <Catalogo products={x} />} />
		</div>
	);
}

export default App;
