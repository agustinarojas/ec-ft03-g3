import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import BeautyStars from 'beauty-stars';

function OrderProducts({ordersUser, match, user}) {
	const [state, setState] = useState(false);
	const [tarea, setTarea] = useState('');
	const [value, setValue] = useState(0);
	var ord = ordersUser?.filter(o => o?.id == match?.params?.id);
	var prods = ord[0]?.products;
	var total = 0;
	for (let i = 0; i < prods?.length; i++) {
		total += prods[i]?.precio * prods[i]?.lineorder?.cantidad;
	}

	const submitRate = (idUser, idProd) => {
		// CAMBIAR DONDE HACE SUBMIT Y SACARLE EL HARDCODEO JAJA! AGREGAR COMENTARIOS. RENDERIZAR VALOR DE ESTRELLITA PROEDIO
		return Axios.post(`http://localhost:3005/products/${idUser}/review`, {
			rating: value,
			descripcion: tarea,
			productId: idProd,
			userId: idUser,
		})
			.then(success => console.log(success))
			.catch(err => console.log(err));
	};

	const handleOnClick = () => {
		setState(true);
	};
	var control;
	return (
		<div>
			<h1>NRO ORDEN: {ord[0]?.id}</h1>
			<h3>Fecha: {ord[0]?.createdAt.slice(0, 10)}</h3>
			<h3>Hora: {ord[0]?.createdAt.slice(11, 19)}</h3>
			<div>
				<h3>Productos:</h3>{' '}
				{prods?.map(p => (
					<div key={p.id}>
						<p>Titulo: {p.titulo}</p>
						<p>Precio: ${p.precio}</p>
						<p>Cantidad:{p.lineorder.cantidad} </p>
						<img src={p.imagen} />
						<Link onClick={() => handleOnClick()}>
							<span>Calificar Producto</span>
						</Link>
						{state ? (
							<div>
								<textarea
									id="body-field"
									name="body"
									onChange={e => setTarea(e.target.value)}></textarea>
								<BeautyStars
									value={value}
									size={'24px'}
									gap={'6px'}
									activeColor={'66C3FF'}
									onChange={value => setValue(value)}
								/>
								{!value || !tarea ? (control = true) : false}
								<button
									disabled={control ? true : false}
									onClick={() => {
										submitRate(user.id, p.id);
										setState(false);
									}}>
									Calificar
								</button>
							</div>
						) : null}
					</div>
				))}
			</div>
			<h2>TOTAL : {total}</h2>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		orders: state.orders,
		ordersUser: state.ordersUser,
		user: state.user,
	};
};
export default connect(mapStateToProps)(OrderProducts);
