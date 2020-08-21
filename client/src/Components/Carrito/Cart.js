import React from 'react';
import Item from './Item';

export default function Cart({match}) {
	return (
		<div>
			<Item match={match} />
			<button>Comprar</button>
		</div>
	);
}
