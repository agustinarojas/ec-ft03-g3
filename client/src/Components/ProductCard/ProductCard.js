import React from 'react';
import './ProductCard.css';

export default function ProductCard({imagen, titulo, precio, id}) {
	return (
		<div className="card">
			{/* <img src={imagen} alt="" />
			<img className="img" src={imagen} alt="" />
			<h1 className="titulo"> {titulo} </h1>
			<p> {precio} </p> */}

			<img className = "foto" src = "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/12/07/15441930177133.jpg"/>
			<h1 className = "titulo">TRENCITO</h1>
			<p className = "precio">$800</p>
			<button className="boton">Add to cart</button>
		</div>
	);
}
