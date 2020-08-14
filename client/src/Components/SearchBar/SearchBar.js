import React, {useState} from 'react';

export default function SerchBar({search}) {
	const [input, setInput] = useState('');
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				search(input);
				setInput('');
			}}>
			<input
				type="text"
				value={input}
				placeholder="Buscar..."
				onChange={event => setInput(event.target.value)}
			/>
			<input type="submit" value="Buscar" />
		</form>
	);
}
