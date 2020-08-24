import React, {useState, useEffect} from 'react';
import './Item.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {getCarrito, deleteProdCart, setCantidad} from '../../Actions/index';

function Item({productsCar, getCarrito, match, deleteProdCart, setCantidad, total}) {
	let num;
	if (productsCar[0]?.precio && productsCar[0]?.lineorder?.cantidad)
		num = productsCar[0]?.precio * productsCar[0]?.lineorder?.cantidad;
	const [total, setTotal] = useState(num);
	const [can, setCantidad] = useState(1);
	let userId = match?.params?.userId;

	const handleOnCLickCantidad = (prodId, type) => {
		let cantidad = productsCar?.filter(prod => prod.id === prodId);
		let stock = cantidad[0]?.stock;
		cantidad = cantidad[0]?.lineorder?.cantidad;
		if (type === 'menos' && cantidad > 1) {
			cantidad = cantidad - 1;
		} else if (type === 'mas' && stock > cantidad) {
			cantidad = cantidad + 1;
		}
		// setCantidad(prodId, cantidad, type);
		axios
			.put(`http://localhost:3005/users/1/cart`, {id: parseInt(prodId), cantidad: cantidad})
			.then(res => res.data)
			.catch(err => console.log(err));
	};
	console.log(productsCar);
	useEffect(() => {
		getCarrito(userId);
		if (total !== 0) setTotal(total);

		// for (let i = 0; i < productsCar.length; i++) {
		// 	console.log(productsCar);
		// 	// setTotal(totalI + productsCar[i]?.lineorder?.cantidad * productsCar[i]?.lineorder?.precio);
		// }
	}, [can]);
	return (
		<div className="carritoItem">
			{productsCar?.map((p, i) => (
				<ul className="list-group list-group-flush cartitem" key={i}>
					<li className="list-group-item disp itemind">
						<img className="imgCart" src={p.imagen} />
						<div className="titdes">
							<p className="tituloo">{p.titulo}</p>
							<p>{p.descripcion}</p>
						</div>
						<div className="botooon">
							<button
								className="btn botoncart"
								onClick={e => handleOnCLickCantidad(e.target.name, 'menos')}
								name={p.id}>
								-
							</button>
							<p className="acomodo">{p.lineorder?.cantidad}</p>
							<button
								className="btn botoncart"
								onClick={e => handleOnCLickCantidad(e.target.name, 'mas')}
								name={p.id}>
								+
							</button>
						</div>
						<div className="precioboton">
							<p id="precio">$ {p.precio} </p>
							<button id="boton1" name={p.id} onClick={e => deleteProdCart(e.target.name)}>
								X
							</button>
						</div>
					</li>
				</ul>
			))}
			<p>{/* Total:{total} */}</p>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		productsCar: state.productsCar,
		total: state.totalCarrito,
	};
};
export default connect(mapStateToProps, {getCarrito, deleteProdCart, setCantidad})(Item);
