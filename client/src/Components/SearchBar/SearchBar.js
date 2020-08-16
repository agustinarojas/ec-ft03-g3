import React, {useState} from 'react';
import './SearchBar.css';

export default function SerchBar({search}) {
	const [input, setInput] = useState('');
	return (
		<div className = "contenedor">
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault();
				search(input);
				setInput('');
			}}>
			<input
				className="input"
				type="text"
				value={input}
				placeholder="Buscar..."
				onChange={event => setInput(event.target.value)}
			/>
			<div className="boton">
			<input type="submit" value="Buscar" />
			</div>
		</form>
		</div>
	);
}
